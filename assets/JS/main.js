const inputFileUpload = document.getElementById('fileToUpload');
inputFileUpload.addEventListener('change', chooseFileOrFolder);
const inputFolderUpload = document.getElementById('folderToUpload');
inputFolderUpload.addEventListener('change', chooseFileOrFolder);
const endpoint = './files/';
const listFiles = document.getElementById('listFiles');

function chooseFileOrFolder(event) {
    if (event.target.name === 'fileToUpload') {
        const form_data = new FormData();
        form_data.append('fileToUpload', inputFileUpload.files[0]);
        uploadFile(form_data, event);
    } else if (event.target.name === 'folderToUpload') {
        const form_data = new FormData();
        form_data.append('folderToUpload', inputFolderUpload.files);
        console.log(inputFolderUpload.files);
        // uploadFile(form_data, event);
    }
}

async function uploadFile(form_data, event) {
    if (event.target.files.length == 0) {
        return;
    }
    const parameters = {
        method: 'POST',
        body: form_data
    };

    const response = await fetch('./uploadFile.php', parameters);
}

async function allFiles(path) {
    const response = await fetch(`./allFiles.php?path=./${path}`);
    const data = await response.json();
    return data;
}

async function listFilesOfDirectory() {
    const response = await fetch('./listFilesOfDirectory.php?folder=./files');
    const data = await response.json();
    return data;
}

async function fileInfo(path) {
    const response = await fetch(`./fileInfo.php?path=./files/${path}`);
    const data = await response.json();
    return data;
}

async function displayAllFoldersAllFiles(path) {
    const data = await allFiles(path);
    console.log(data)
}

async function displayOneFolderAllFiles(folder) {
    const files = await listFilesOfDirectory(endpoint + folder);
    for (const fileName in files) {
        const data = await fileInfo(files[fileName]);
        console.log(data);
        const template = ` 
        <div class="row border border-dark">
            <div class="col-sm">${data.name}</div>
            <div class="col-sm">${data.lastModified}</div>
            <div class="col-sm">${data.extension}</div>
            <div class="col-sm">${data.size}</div>
            <div class="col-sm">
                <i class="fas fa-edit" onclick="editFile(this)"></i>
                </div>
            <div class="col-sm" onclick="deleteFile(this)">
                <i class="far fa-trash-alt"></i>
            </div>
        </div>`;
        listFiles.insertAdjacentHTML("beforeend", template);

    }
}

window.addEventListener('DOMContentLoaded', async () => {
    displayAllFoldersAllFiles(endpoint);
    displayOneFolderAllFiles(endpoint);
});

function editFile(e){
    const father = e.parentElement.parentElement;
}

function deleteFile(e){
    const father = e.parentElement.parentElement;
}