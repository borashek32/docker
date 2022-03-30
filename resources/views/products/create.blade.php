<div class="bg-modal closed" id="modalCreate">
    <div class="bg-modal__modal" id="modal">
        <div class="modal__header">
            <p class="header__text">Добавить продукт</p>
            
            <div class="header__icons">
                <img src="/img/close.png" alt="close" class="icons__close" id="closeCreate">
            </div>
        </div>

        <form action="#" method="POST"  
            enctype="multipart/form-data" id="formAddProduct" pattern="^[a-zA-Z0-9]+$">
            @csrf
            <div id="modal">

                {{-- <ul id="storeErrorList" class="modal__input-group"></ul> --}}

                <div class="modal__input-group">
                    <label for="product_article" class="input-group__title ">Артикул</label>
                    <input type="text" id="article" class="input-group__input article">

                    <span class="article_error error-text text-red-500 text-sm"></span>
                </div>
    
                <div class="modal__input-group">
                    <label for="product_name" class="input-group__title">Название</label>
                    <input type="text" id="name" class="input-group__input name">

                    <span class="name_error error-text text-red-500 text-sm"></span>
                </div>
    
                <div class="modal__input-group">
                    <label for="product_status" class="input-group__title">Статус</label>
                    <select type="text" id="status" class="input-group__input status">

                        <div class="input__status-overlay">
                            <option selected></option>
                            <option class="status" value="1">Доступен</option>
                            <option class="status" value="0">Недоступен</option>
                        </div>
                    </select>

                    <span class="status_error error-text text-red-500 text-sm"></span>
                </div>
    
                <p class="modal__subheader">Атрибуты</p>
    
                <div id="attr-overlay">
                    <div class="modal__bg-attr" id="attr">
                        <div class="bg-attr__input-group">
                            <label for="product_data" class="input-group__title">Название</label>
                            <input type="text" id="" name="data[0][]" class="input-group__input">
                        </div>
                        
                        <span class="product_data[0][]_error text-red-500 text-sm"></span>

                        <div class="bg-attr__input-group">
                            <label for="" class="input-group__title">Значение</label>
                            <input type="text" id="" name="data[0][]" class="input-group__input">
                        </div>

                        <span class="product_data_error text-red-500 text-sm"></span>
                    </div>
                </div>
    
                <div class="closed" id="attr-overlay1">
                    <div class="modal__bg-attr" id="attr1">
                        <div class="bg-attr__input-group">
                            <label for="" class="input-group__title">Название</label>
                            <input type="text" id="extraDataKey" name="data[1][]" 
                                class="input-group__input">
                        </div>
        
                        <div class="bg-attr__input-group">
                            <label for="" class="input-group__title">Значение</label>
                            <input type="text" id="extraDataValue" name="data[1][]" 
                                class="input-group__input">
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
                <button class="bg-button__text add_product" id="saveButton" type="submit" >
                    Сохранить
                </button>
            </div>
        </form>
    </div>
</div>