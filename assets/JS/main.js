const inputFileUpload = document.getElementById('fileToUpload');
inputFileUpload.addEventListener('change', chooseFileOrFolder);
const inputFolderUpload = document.getElementById('folderToUpload');
inputFolderUpload.addEventListener('change', chooseFileOrFolder);

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
