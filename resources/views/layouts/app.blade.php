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
        <div class="background-admin">
            <div class="left-column">
            <div class="logo-fon">
                    <div class="small-logo">
                        @include('includes.small-logo')
                    </div>

                    <div class="text-left-container">
                        <div class="text-left">
                            <p>Enterprise<br>Resourse<br>Planning</p>
                        </div>
                    </div>    

                    <div class="menu">
                        <p class="menu-text">Продукты</p>
                    </div>
                </div>
            </div>    

            <div class="wrap">
                <div class="content">
                    @include('navigation-menu')
            
                    @yield('content')
                </div>
            </div>
        </div>
                    
        @include('products.create')

        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
        <script src="{{ asset('js/index.js') }}"></script>
    </body>
</html>
