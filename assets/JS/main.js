const inputFileUpload = document.getElementById('fileToUpload');
inputFileUpload.addEventListener('change', chooseFileOrFolder);
const inputFolderUpload = document.getElementById('folderToUpload');
inputFolderUpload.addEventListener('change', chooseFileOrFolder);
const endpoint = "./files/";

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

    const response = await fetch("./uploadFile.php", parameters);
}

async function allFiles(path) {
    const response = await fetch(`./allFiles.php?path=./${path}`);
    const data = await response.json();
    return data;
}

async function listFilesOfDirectory() {
    const response = await fetch("./listFilesOfDirectory.php?folder=./files");
    const data = await response.json(); 
    return data;
}

async function fileInfo(path) {
    const response = await fetch(`./fileInfo.php?path=./files/${path}`);
    const data = await response.json();
    return data;
}

window.addEventListener("DOMContentLoaded", async() => {
    const data = await allFiles(endpoint);
    console.log(data);
    const files = await listFilesOfDirectory();
    for (const file in files) {
        const data = await fileInfo(files[file]);
        console.log(data);
    }
});
