const inputFileUpload = document.getElementById('fileToUpload');
inputFileUpload.addEventListener("click", uploadFile);
let endpoint = './files/';
const listFiles = document.getElementById('listFiles');
const treeFiles = document.getElementById('treeFiles');

window.addEventListener('DOMContentLoaded', async () => {
    displayOneFolderAllFiles(endpoint);
    displayAllFoldersOnFolder(endpoint);
});

async function uploadFile(event) {
    const form_data = new FormData();
    form_data.append('fileToUpload', inputFileUpload.files[0]);
    const parameters = {
        method: 'POST',
        body: form_data
    };
    const response = await fetch('./uploadFile.php', parameters);
    displayOneFolderAllFiles(endpoint);
    displayAllFoldersOnFolder(endpoint);
}

async function displayOneFolderAllFiles(folder) {
    clearInforFiles();
    const files = await listFilesOfDirectory(folder);
    for (const fileName in files) {
        const data = await fileInfo(folder + "/" + files[fileName]);
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
                <button onclick="removeElement(this)" data-toggle="modal" data-target="#modalDeleteFile"><i class="far fa-trash-alt"></i></button>
            </div>
        </div>`;
        listFiles.insertAdjacentHTML('beforeend', template);
    }
}

function clearInforFiles() {
    while(listFiles.children.length > 1) {
        listFiles.lastChild.remove();
    }
}

function clearTreeFolders() {
    while(treeFiles.children.length > 0) {
        treeFiles.lastChild.remove();
    }
}

async function displayAllFoldersOnFolder(folder) {
    clearTreeFolders();
    const folders = await listFoldersOfDirectory(folder);
    let newList = document.createElement("ol");
    for (const folder in folders) {
        let newItem = document.createElement("li");
        newItem.dataset.url = endpoint + folders[folder] + "/";
        newItem.textContent = folders[folder];
        newList.appendChild(newItem);
        newItem.addEventListener("click", selectedFolder);
    }
    treeFiles.appendChild(newList);
}

function selectedFolder(e) {
    endpoint = endpoint + e.target.textContent + "/";
    displayOneFolderAllFiles(endpoint);
    displayAllFoldersOnFolder(endpoint);
}

function editFile(e) {
    const father = e.parentElement.parentElement;
    const fileName = father.querySelector('.data-name');
    const extName = father.querySelector('.data-extension');
    createEditModal();
    const editNameModalContainer = document.getElementById('newName');
    const oldName = document.getElementById('oldName');
    const path = document.getElementById('path')
    editNameModalContainer.value = fileName.textContent + '.' + extName.textContent;
    oldName.value = fileName.textContent + "." + extName.textContent;
    path.value = endpoint
}

function removeElement(e) {
    modalDeleteFile();
    const father = e.parentElement.parentElement;
    const fileName = father.querySelector('.data-name');
    const extName = father.querySelector('.data-extension');
    const fullPath = endpoint +  fileName.textContent + '.' + extName.textContent;
    document.querySelector('#pathName').textContent = fullPath;
}