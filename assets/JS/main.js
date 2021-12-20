let inputUpload = document.getElementById('fileToUpload');
inputUpload.addEventListener('change', uploadFile);

async function uploadFile() {
    if(inputUpload.files.length == 0) {
        return;
    }
    const form_data = new FormData();
    form_data.append('fileToUpload', inputUpload.files[0]);

    const parameters = {
        method: "POST",
        body: form_data
    };

    const response = await fetch("./uploadFile.php", parameters);
}