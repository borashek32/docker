@extends('layouts.app')
@section('content')
    <div class="">
        @include('products.products')
        
        <div class="button-overflow">
            <button class="button" id="open-button">
                <p class="button-text">Добавить</p>
            </button>
        </div>
    </div>
@endsection
