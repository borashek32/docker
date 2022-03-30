<?php

use Illuminate\Support\Facades\Route;
use App\Http\Livewire\Products;

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
Route::middleware(['auth:sanctum', 'verified'])
    ->name('products.')
    ->group(function() {

    Route::get('/products', [App\Http\Controllers\Dashboard\ProductController::class, 'index'])
        ->name('index');
    Route::post('/products', [App\Http\Controllers\Dashboard\ProductController::class, 'store']);
    Route::get('/fetch-products', [App\Http\Controllers\Dashboard\ProductController::class, 'fetchProducts']);
});