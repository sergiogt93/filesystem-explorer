function createEditModal() {
    const template = `
    <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    Edit File / Folder
                </div>
                <div class="modal-body">

                    <table class="table">
                        <tr>
                            <th>Name</th>
                            <td><input id="modalEditName"></td>
                        </tr>
                    </table>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                    <button id="submitEdit" class="btn btn-success success">Save</button>
                </div>
            </div>
        </div>
    </div>`;
    document.querySelector("body").insertAdjacentHTML('beforeend', template)
};