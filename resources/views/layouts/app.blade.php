<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Панель инструментов</title>

        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        <link rel="stylesheet" href="{{ asset('css/site.css') }}">

        <link href="https://fonts.googleapis.com/css?family=Roboto:regular,bod,light,medium&display=swap&subset=cyryllic-ext" rel="stylesheet">
        @livewireStyles

        <script src="{{ mix('js/app.js') }}" defer></script>
    </head>
    <body class="background-admin">
        <div class="left-column">
           <div class="logo-fon">
                <div class="small-logo">
                    @include('includes.small-logo')
                </div>

                <div class="text-left">
                    <p>Enterprise<br>Resourse<br>Planning</p>
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
            

        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
