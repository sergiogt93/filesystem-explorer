<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>Document</title>
</head>

<body>
    <nav>

    </nav>
    <main>
        <section>
            <form encaptype="multipart/form-data">
                <label for="folderToUpload">Upload Folder</label>
                <input type="file" name='folderToUpload' class="folderToUpload" id="folderToUpload" webkitdirectory mozdirectory>
                <label for="fileToUpload">Upload File</label>
                <input type="file" name='fileToUpload' class="fileToUpload" id="fileToUpload">
            </form>
        </section>
        <section id="listFiles">
           
        </section>
    </main>
    <script src="./assets/JS/main.js"></script>
</body>

</html>