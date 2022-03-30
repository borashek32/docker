<?php

namespace App\Http\Controllers\Dashboard;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        return view('products.index');
    }

    public function fetchProducts() 
    {
        if (Auth::user()->hasRole('admin')) {
            $products = Product::all();
        } else {
            $products = Product::active()->get();
        }
        
        if(!$products) {
            return response()->json([
                'status'   => 400,
                'errors'   => 'Что-то пошло не так'
            ]);
        } else {
            return response()->json([
                'status'    => 200,
                'products'  => $products
            ]);
        }
    }
    
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name'     => 'required|string',
            'article'  => 'required|unique:products',
            'status'   => 'required'
        ],[
            'name.required'     => 'Поле "Название" обязательно для заполнения',
            'name.string'       => 'Поле "Название" содержит только текстовые символы',
            'article.required'  => 'Поле "Артикул" обязательно для заполнения',
            'article.unique'    => 'Поле "Артикул" должно быть уникально',
            'status.required'   => 'Поле "Статус" обязательно для заполнения'
        ]);

        if(!$validator->passes()){
            return response()->json([
                'status'   => 400,
                'errors'   => $validator->messages()
            ]);

        } else {
            $data = $request->post('data');
            $json_data = collect($data)->mapWithKeys(fn($item) => [$item[0] => $item[1]]);

            $product = new Product();
            $product->article   = $request->input('article');
            $product->name      = $request->input('name');
            $product->status    = $request->input('status');
            $product->data      = $json_data;
            $query = $product->save();
        
            if(!$query) {
                return response()->json([
                    'status'   => 400,
                    'errors'   => 'Что-то пошло не так'
                ]);
            } else {
                return response()->json([
                    'status'   => 200,
                    'product'  => $product
                ]);
            }
        }
    }
}
