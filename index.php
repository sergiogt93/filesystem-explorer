<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>PHP Filesystem</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" rel="stylesheet">
    <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">


</head>
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
        <a class="navbar-brand">Filesystem Explorer</a>
        <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </nav>
    <main class="d-flex justify-content-start mr-auto">
        <section class="container border-end bg-white flex-shrink-1 mr-auto col-3">
            <form encaptype="multipart/form-data">
                <button class="btn btn-primary m-2">Upload Folder</button>
                <input type="file" name='folderToUpload' class="folderToUpload" webkitdirectory mozdirectory id="folderToUpload">
                <button class="btn btn-primary m-2">Upload File</button>
                <input type="file" id="fileToUpload" name='fileToUpload' class="fileToUpload">
            </form>
            <div class="list-group" id="treeFiles">
            </div>
        </section>
        <section class="container-fluid border border-dark flex-grow-1 col-9" id="listFiles">
            <div class="row border border-dark">
                <div class="col-md">Name</div>
                <div class="col-md">Last Modified </div>
                <div class="col-sm">.ext</div>
                <div class="col-sm">Size</div>
                <div class="col-sm">
                    <i class="fas fa-edit"></i>
                </div>
                <div class="col-sm">
                    <i class="far fa-trash-alt"></i>
                </div>
            </div>
        </section>
    </main>


    <!-- Bootstrap core JS-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Core theme JS-->
    <script src="./assets/JS/peticionsAPI.js"></script>
    <script src="./assets/JS/main.js"></script>
    <script src="./assets/JS/modal.js"></script>
</body>

</html>