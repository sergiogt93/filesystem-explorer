const inputFileUpload = document.getElementById('fileToUpload');
inputFileUpload.addEventListener('change', chooseFileOrFolder);
const inputFolderUpload = document.getElementById('folderToUpload');
inputFolderUpload.addEventListener('change', chooseFileOrFolder);
let endpoint = './files/';
const listFiles = document.getElementById('listFiles');

function chooseFileOrFolder(event) {
    if (event.target.name === 'fileToUpload') {
        const form_data = new FormData();
        // console.log(form_data);
        form_data.append('fileToUpload', inputFileUpload.files[0]);
        uploadFile(form_data, event);
        // console.log(form_data);
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

async function listFilesOfDirectory(path) {
    const response = await fetch(`./listFilesOfDirectory.php?folder=${path}`);
    const data = await response.json();
    return data;
}

async function fileInfo(path) {
    const response = await fetch(`./fileInfo.php?path=./files/${path}`);
    const data = await response.json();
    return data;
}

async function displayOneFolderAllFiles(folder) {
    const files = await listFilesOfDirectory(folder);
    for (const fileName in files) {
        const data = await fileInfo(files[fileName]);
        const template = ` 
        <div class="row border border-dark">
            <div class="col-sm data-name">${data.name}</div>
            <div class="col-sm">${data.lastModified}</div>
            <div class="col-sm data-extension">${data.extension}</div>
            <div class="col-sm">${data.size}</div>
            <div class="col-sm">
                <button onclick="editFile(this)" data-toggle="modal" data-target="#editModal"><i class="fas fa-edit" type="button"  ></i></button>
                </div>
            <div class="col-sm">
                <button data-toggle="modal" data-target="#deleteModal"><i class="far fa-trash-alt"></i></button>
            </div>
        </div>`;
        listFiles.insertAdjacentHTML('beforeend', template);
    }
}

window.addEventListener('DOMContentLoaded', async () => {
    displayOneFolderAllFiles(endpoint);
    selectFolder();
});

function editFile(e) {
    const father = e.parentElement.parentElement;
    const fileName = father.querySelector('.data-name');
    const extName = father.querySelector('.data-extension');
    createEditModal();
    const editNameModalContainer = document.getElementById('modalEditName');
    editNameModalContainer.value =
        fileName.textContent + '.' + extName.textContent;
    const submitEdit = document
        .getElementById('submitEdit')
        .addEventListener('click', updateFile);
}

function updateFile() {
    const fileName = document.getElementById('modalEditName');
    alert(fileName.value);
}

function deleteFile(e) {
    // const father = e.parentElement.parentElement;
    // console.log(father);
    // document.querySelector('#modalContentEdit').innerHTML = "";
}

function selectFolder() {
    let childrens = document.querySelectorAll(".filesTree li");

    for (const file of childrens) {
        file.addEventListener('click', () => {
            // listFilesOfDirectory(endpoint + file.textContent) 
            console.log(file.dataset.url)
        });
    }
}


