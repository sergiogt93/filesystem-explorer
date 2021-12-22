function createEditModal() {
    const template = `
    <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <form action="./update.php" method="POST" class="modal-content">
                <div class="modal-header">
                    Edit File / Folder
                </div>
                <div class="modal-body">
                    <table class="table">
                        <tr>
                            <th>Name</th>
                            <td><input id="newName" name="newName"></td>
                        </tr>
                        <tr>
                        <td><input id="path" name="path" class="invisible"></td>
                        <td><input id="oldName" name="oldName" class="invisible"></td>
                        </tr>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                    <button name="submitEdit" class="btn  btn-success" type="submit">Save</button>
                </div>
            </form>
        </div>
    </div>`;
    document.querySelector("body").insertAdjacentHTML('beforeend', template)
};

function modalDeleteFile() {
    const template = `
    <div class="modal fade" id="modalDeleteFile" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <form class="modal-content" action="./update.php" method="POST">
            <div class="modal-header">
                Delete File / Folder
            </div>
            <div class="modal-body">Are you sure you want to delete this file?<input id="pathName" name="pathName" class="invisible"></div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                <button type="submit" name="modalDeleteBtn" class="btn  btn-success">Delete</button>
            </div>
        </form>
    </div>
</div>`;

document.querySelector("body").insertAdjacentHTML('beforeend', template)
}