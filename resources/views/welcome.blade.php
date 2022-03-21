@extends('layouts.site')
@section('title')
    Интернет
@endsection
@section('content')
<div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
    <div class="">
        @include('includes.logo')
    </div>
</div>

{{-- <form action="" onsubmit="return validate();">
	<input type="text" id="userName">
	<input type="password" id="userPassword">

	<button type="submit">Отправить</button>
</form>

<script>
	
	function validate() {
		var userName = document.getElementById("userName");
		var userPassword = document.getElementById("userPassword");


		if(!userName.value) {
			userName.style.border = "2px solid red";
			return false;
		}

		if(!userPassword.value) {
			userPassword.style.border = "2px solid red";
			return false;
		}


		return true;

	}


</script> --}}
@endsection    
