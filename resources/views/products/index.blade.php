@extends('layouts.app')
@section('content')
    <div class="">
        @include('products.products')
        
        @if (Auth::user()->hasRole('admin'))
            <div class="content__bg-button">
                <button class="bg-button__button" id="open-button">
                    <p class="button__button-text">Добавить</p>
                </button>
            </div>
        @endif
    </div>
@endsection
