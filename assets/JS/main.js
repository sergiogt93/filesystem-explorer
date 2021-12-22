const inputFileUpload = document.getElementById('fileToUpload');
inputFileUpload.addEventListener('change', chooseFileOrFolder);
const inputFolderUpload = document.getElementById('folderToUpload');
inputFolderUpload.addEventListener('change', chooseFileOrFolder);
let endpoint = './files/';
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

function editFile(e) {
    const father = e.parentElement.parentElement;
    const fileName = father.querySelector('.data-name');
    const extName = father.querySelector('.data-extension');
    createEditModal();
    const editNameModalContainer = document.getElementById('newName');
    const oldName = document.getElementById('oldName');
    const path = document.getElementById('path')
    editNameModalContainer.value =
        fileName.textContent + '.' + extName.textContent;
    oldName.value = fileName.textContent + "." + extName.textContent;
    path.value = endpoint
}

function removeElement(e) {

    modalDeleteFile();
    const father = e.parentElement.parentElement;
    const fileName = father.querySelector('.data-name');
    const extName = father.querySelector('.data-extension');

    document.querySelector('#pathName').textContent = endpoint +  fileName.textContent + '.' + extName.textContent;
    
    console.log(document.querySelector('#pathName').textContent)


}