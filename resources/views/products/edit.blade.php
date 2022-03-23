<div class="bg-modal closed" id="edit-modal-overlay">
    <div class="bg-modal__modal closed" id="edit-modal">
        <div class="modal__header">
            <p class="header__text">Редактировать продукт</p>
            
            <div class="header__icons">
                <img src="/img/close.png" alt="close" class="icons__close" id="closeEdit">
            </div>
        </div>

        <form action="#" onsubmit="return validate();" 
            method="POST" id="formUpdateProduct" pattern="^[a-zA-Z0-9]+$">
            @csrf
            <div id="modal">
                <div class="modal__input-group">
                    <label for="article" class="input-group__title">Артикул</label>
                    <input type="text" name="article" id="articleProductEdit" pattern="^[a-zA-Z0-9]+$"
                        required class="input-group__input">

                    <div id="error-article" class="closed">
                        <p class="error closed" id="text-error-article">
                            Поле "Артикул" обязательно для заполнения.
                        </p>
                    </div>
                </div>
    
                <div class="modal__input-group">
                    <label for="nameProduct" class="input-group__title">Название</label>
                    <input type="text" id="nameProductEdit" name="name"
                        required minlength="10" class="input-group__input">

                    <div id="error-name" class="closed">
                        <p class="error closed" id="text-error-name">
                            Поле "Название" обязательно для заполнения.
                        </p>
                    </div>
                </div>
    
                <div class="modal__input-group">
                    <label for="input1" class="input-group__title">Статус</label>
                    <select type="text" name="status" id="statusProductEdit" class="input-group__input">

                        <div class="input__status-overlay">
                            <option selected></option>
                            <option class="status" value="1">Доступен</option>
                            <option class="status" value="0">Недоступен</option>
                        </div>
                    </select>
                </div>
    
                <p class="modal__subheader">Атрибуты</p>
    
                <div id="attr-overlay">
                    <div class="modal__bg-attr" id="attr">
                        <div class="bg-attr__input-group">
                            <label for="" class="input-group__title">Название</label>
                            <input type="text" id="" name="data[0][]" class="input-group__input">
                        </div>
        
                        <div class="bg-attr__input-group">
                            <label for="" class="input-group__title">Значение</label>
                            <input type="text" id="" name="data[0][]" class="input-group__input">
                        </div>
                    </div>
                </div>
    
                <div class="closed" id="attr-overlay1">
                    <div class="modal__bg-attr closed" id="attr1">
                        <div class="bg-attr__input-group">
                            <label for="" class="input-group__title">Название</label>
                            <input type="text" id="extraDataKey" name="data[1][]" class="input-group__input">
                        </div>
        
                        <div class="bg-attr__input-group">
                            <label for="" class="input-group__title">Значение</label>
                            <input type="text" id="extraDataValue" name="data[1][]" class="input-group__input">
                        </div>

                        <div class="bg-attr__trash">
                            <img src="/img/trash.png" alt="trash" id="trash1">
                        </div>
                    </div>
                </div>

                <a href="#" class="modal__add-attr" id="add-link">
                    + Добавить атрибут
                </a>
            </div>
            <div class="bg-modal__button">
                <button class="bg-button__text" id="submitButton" type="submit" >
                    Добавить
                </button>
            </div>
        </form>
    </div>
</div>