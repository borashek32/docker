@extends('layouts.app')
@section('content')
    <div class="">
      <div class="bg-teal-100 rounded-b text-teal-900 px-4 py-3 shadow-md my-3 closed"
        id="successAlert" role="alert">
          <div class="flex">
              <div>
                  <span class="text-sm "></span>
              </div>
          </div>
      </div>

      @include('products.fetch')
      
      @if (Auth::user()->hasRole('admin'))
        <div class="content__bg-button">
            <button class="bg-button__button" id="openCreate">
                <p class="button__button-text">Добавить</p>
            </button>
        </div>
      @endif
    </div>
@endsection
