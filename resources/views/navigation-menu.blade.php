<div class="nav">
    <div class="nav-color">
        <div class="line">
            <div class="nav-link">
                <p class="text">ПРОДУКТЫ</p>
            </div>
            <div>
                <hr />
            </div>
        </div>
    
        <div class="auth">
            <form method="POST" action="{{ route('logout') }}">
                @csrf
    
                <x-jet-dropdown-link href="{{ route('logout') }}"
                                        onclick="event.preventDefault();
                                                this.closest('form').submit();">
                    <p class="name">{{ Auth::user()->name }}</p>
                </x-jet-dropdown-link>
            </form>
        </div>
    </div>
</div>
