<?php

namespace App\Http\Controllers\Dashboard;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function products()
    {
        if (Auth::user()->hasRole('admin')) {
            $products = Product::all();
        } else {
            $products = Product::active()->get();
        }
        

        return view('dashboard', compact('products'));
    }
}