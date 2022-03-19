<?php

use App\Models\User;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [App\Http\Controllers\SiteController::class, 'index'])
    ->name('welcome');

// DASHBOARD ROUTES   
Route::get('/dashboard', [\App\Http\Controllers\Dashboard\ProductController::class, 'products'])
    ->name('user-products')->middleware('auth');
