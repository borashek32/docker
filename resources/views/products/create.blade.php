<div class="modal-overlay closed" id="modal-overlay">
    <div class="modal closed" id="modal">
        <div class="modal-header">
            <p class="modal-header-text">Добавить продукт</p>
            
            <img src="/img/close.png" alt="close" class="close" id="close-button">
        </div>

        <form action="{{ route('products.store') }}" method="POST">
            @csrf
            <div class="modal-body" id="modal">
                <div class="input-group">
                    <label for="input1" class="text-left">Артикул</label>
                    <input type="text" name="article" id="input1" class="input">
                </div>
    
                <div class="input-group">
                    <label for="input1" class="text-left">Название</label>
                    <input type="text" id="input1" name="name" class="input">
                </div>
    
                <div class="input-group">
                    <label for="input1" class="text-left">Статус</label>
                    <select type="text" name=status id="input1" class="input">
                        <label for="">Статус</label>
                        <div class="status-overflow">
                            <option selected></option>
                            <option class="status" value="1">Доступен</option>
                            <option class="status" value="0">Недоступен</option>
                        </div>
                    </select>
                </div>
    
                <p class="modal-header-text">Атрибуты</p>
    
                <div id="attributes-overflow" rebest='yes'>
                    <div class="attributes" id="attributes">
                        <div class="input-group">
                            <label for="" class="text-left">Название</label>
                            <input type="text" id="" name="data" class="input-attr">
                        </div>
        
                        <div class="input-group">
                            <label for="" class="text-left">Значение</label>
                            
                            <div class="attributes">
                                <input type="text" id="" name="data" class="input-attr">
        
                                <div class="trash">
                                    <img src="/img/trash.png" alt="trash" id="close-button">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <a href="#" class="add-attr" id="open-link"id="add-button">
                    + Добавить атрибут
                </a>
            </div>
        
            <div class="button">
                <button class="button-text" type="submit" >
                    Добавить
                </button>
            </div>
        </form>
    </div>
</div>