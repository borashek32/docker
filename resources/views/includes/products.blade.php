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

            </tbody>
        </table>
    </div>
@else
    <p>На сайте пока нет товаров.</p>
@endif
