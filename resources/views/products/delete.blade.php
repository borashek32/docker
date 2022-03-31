<div class="bg-modal-delete close-delete" id="modalDelete">
    <div class="bg-modal-delete__delete">
        <div class="delete__header-delete">
            <p class="header-delete__text">Вы действительно хотите удалить продукт?</p>

            <div class="header-delete__icons-delete">
                <img src="/img/close.png" alt="close" class="close" id="closeDelete">
            </div>
        </div>
    </div>
</div>

<style>
.bg-modal-delete {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: right;
    z-index: 100000;
    position: absolute;
    }

.bg-modal-delete__delete {
    width: 630px;
    height: 150px;
    margin-top: 59px;
    padding-left: 11px;
    padding-bottom: 39px;
    right: 0;
    position: absolute;
    background-color: #374050;
    border: 1px solid;
}

.delete__header-delete {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.header-delete__text {
    font-size: 20px;
    color: #fff;
    margin-top: 24px;
    margin-bottom: 28px;
}

.close-delete {
    display: none;
}
  
</style>