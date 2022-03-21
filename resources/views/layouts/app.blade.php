<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Панель инструментов</title>

        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        <link rel="stylesheet" href="{{ asset('css/site.css') }}">

        @livewireStyles

        <script src="{{ mix('js/app.js') }}" defer></script>
    </head>
    <body>            
        @include('products.create')
        @include('products.show')

        <div class="bg">
            <div class="bg__left">
                <div class="left__bg-logo">
                    <div class="bg-logo__admin-logo">
                        @include('includes.small-logo')
                    </div>
                </div>
            
                <div class="left__container">
                    <div class="container__text">
                        <p>Enterprise<br>Resourse<br>Planning</p>
                    </div>
                </div>        

                <div class="left__menu">
                    <p class="menu__text">Продукты</p>
                </div>
            </div>    

            <div class="bg__right">
                <div class="right__content">
                    @include('navigation-menu')
            
                    @yield('content')
                </div>
            </div>
        </div>

        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
        <script src="{{ asset('js/index.js') }}"></script>
    </body>
</html>
