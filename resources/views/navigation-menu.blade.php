<div class="content__nav">
    <div>
        <p class="nav__link">
            ПРОДУКТЫ
        </p>
        
        <hr class="nav__hr">
    </div>

    <div class="nav__auth">
        <form method="POST" action="{{ route('logout') }}">
            @csrf

            <x-jet-dropdown-link href="{{ route('logout') }}"
                                    onclick="event.preventDefault();
                                            this.closest('form').submit();">
                {{ Auth::user()->name }}
            </x-jet-dropdown-link>
        </form>
    </div>
</div>
