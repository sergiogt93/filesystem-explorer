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
    const response = await fetch(`./listFilesOfDirectory.php?files=${path}`);
    const data = await response.json();
    return data;
}

async function listFoldersOfDirectory(path) {
    const response = await fetch(`./listFilesOfDirectory.php?folders=${path}`);
    const data = await response.json();
    return data;
}

async function fileInfo(path) {
    const response = await fetch(`./fileInfo.php?path=./files/${path}`);
    const data = await response.json();
    return data;
}

