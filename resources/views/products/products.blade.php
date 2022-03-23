@if($products->count() > 0)
    <table class="content__table" id="products-table">
        <thead class="table__header">
            <tr>
                <th class="header__title" style="padding-left:18px">АРТИКУЛ</th>
                <th class="header__title">НАЗВАНИЕ</th>
                <th class="header__title">СТАТУС</th>
                <th class="header__title">АТРИБУТЫ</th>
            </tr>
        </thead>

        <tbody class="table__body">
            @foreach($products as $product)
                <tr>
                    <td class="body__item">
                        <a href="#" id="atr">
                            {{ $product->article }}
                        </a>
                    </td>
                    
                    <td class="body__item">
                        {{ $product->name }}
                    </td>

                    @if($product->status == '1') 
                        <td class="body__item">доступен</td>
                    @else
                        <td class="body__item">недоступен</td>
                    @endif

                    <td class="body__item">
                        @foreach($product->data as $field => $value)
                            {{ $field }}: {{ $value }}<br>
                        @endforeach
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
@else
    <p class="text-sm text-black-700 mt-6">На сайте пока нет товаров.</p>
@endif