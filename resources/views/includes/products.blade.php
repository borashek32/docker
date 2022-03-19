@if(\App\Models\Product::all()->count() > 0)
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
                    @if($product->status == 'available') 
                        <td class="item">доступен</td>
                    @else
                        <td class="item">недоступен</td>
                    @endif

                    {{-- <td class="item">{{ json_encode($product->data, JSON_FORCE_OBJECT) }}</td> --}}

                    <td class="item">
                        @foreach($product->data)
                            {{ $product->data->color }}
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