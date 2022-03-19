@if($products->count() > 0)
    <div class="table">
        <table class="">
            <thead>
            <tr class="header">
                <th class="title">АРТИКУЛ</th>
                <th class="title">НАЗВАНИЕ</th>
                <th class="title">СТАТУС</th>
                <th class="title">АТРИБУТЫ</th>
            </tr>
            </thead>
            <tbody class="table-body">
            @foreach($products as $product)
                <tr>
                    <td class="item">{{ $product->article }}</td>
                    <td class="item">{{ $product->name }}</td>

                    @if($product->status == '1') 
                        <td class="item">доступен</td>
                    @else
                        <td class="item">недоступен</td>
                    @endif

                    <td class="item">
                        @foreach($product->data as $field => $value)
                            {{ $field }}: {{ $value }}<br>
                        @endforeach
                    </td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
@else
    <p>На сайте пока нет товаров.</p>
@endif