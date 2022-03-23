@extends('layouts.app')
@section('content')
    <div class="">
      {{-- <div class="bg-teal-100 rounded-b text-teal-900 px-4 py-3 shadow-md my-3" role="alert">
          <div class="flex">
              <div>
                  <span class="text-sm "></span>
              </div>
          </div>
      </div> --}}

      @include('products.products')
      
      @if (Auth::user()->hasRole('admin'))
        <div class="content__bg-button">
            <button class="bg-button__button" id="open-button" data-modal-btn="modalCreate">
                <p class="button__button-text">Добавить</p>
            </button>
        </div>
      @endif
    </div>
@endsection
