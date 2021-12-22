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
    const response = await fetch(`./fileInfo.php?path=${path}`);
    const data = await response.json();
    return data;
}

