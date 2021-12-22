const inputFileUpload = document.getElementById('fileToUpload');
inputFileUpload.addEventListener('change', chooseFileOrFolder);
const inputFolderUpload = document.getElementById('folderToUpload');
inputFolderUpload.addEventListener('change', chooseFileOrFolder);
const endpoint = './files/';
const listFiles = document.getElementById('listFiles');
const treeFiles = document.getElementById('treeFiles');

window.addEventListener('DOMContentLoaded', async () => {
    displayOneFolderAllFiles(endpoint);
    displayAllFoldersOnFolder(endpoint);
});

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

async function displayOneFolderAllFiles(folder) {
    const files = await listFilesOfDirectory(folder);
    for (const fileName in files) {
        const data = await fileInfo(files[fileName]);
        const template = `
        <div class="row border border-dark">
            <div class="col-sm" id="dataName">${data.name}</div>
            <div class="col-sm">${data.lastModified}</div>
            <div class="col-sm">${data.extension}</div>
            <div class="col-sm">${data.size}</div>
            <div class="col-sm">
                <i class="fas fa-edit" type="button" data-toggle="modal"  data-target="#exampleModal" onclick="editFile(this)"></i>
                </div>
            <div class="col-sm" onclick="deleteFile(this)">
                <i class="far fa-trash-alt"></i>
            </div>
        </div>`;
        listFiles.insertAdjacentHTML("beforeend", template);
    }
}

async function displayAllFoldersOnFolder(folder) {
    const folders = await listFoldersOfDirectory(folder);
    let newList = document.createElement("ol");
    for (const folder in folders) {
        let newItem = document.createElement("li");
        newItem.textContent = folders[folder];
        newList.appendChild(newItem);
        newItem.addEventListener("click", selectedFolder);
    }
    treeFiles.appendChild(newList);
}

function selectedFolder(e) {
    console.log(e.target.textContent);
}