<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Document</title>
</head>

<body>
    <nav>

    </nav>
    <main>
        <section>
            <form action="./uploadFile.php" method="post" enctype="multipart/form-data">
                <input type='file' name='fileToUpload' open>
                <input type="submit" value="Upload" name="submit">
            </form>
        </section>
        <section>
            <?php
            require "./files_control.php";
            print_r(showFiles("./files"));
            ?>
        </section>
    </main>
</body>

</html>