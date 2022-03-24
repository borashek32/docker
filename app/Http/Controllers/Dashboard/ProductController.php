<?php

namespace App\Http\Controllers\Dashboard;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        if (Auth::user()->hasRole('admin')) {
            $products = Product::all();
        } else {
            $products = Product::active()->get();
        }
        
        return view('products.index', compact('products'));
    }
    
    public function store(Request $request)
    {
        $validator = \Validator::make($request->all(),[
            'name'     => 'required|string',
            'article'  => 'required|unique:products',
            'status'   => 'required'
        ],[
            'name.required'     => 'Поле "Название" обязательно для заполнения',
            'name.string'       => 'Поле "Название" содержит только текстовые символы',
            'article.required'  => 'Поле "Артикул" обязательно для заполнения',
            'article.unique'    => 'Поле "Артикул" уникально',
            'status.required'   => 'Поле "Статус" обязательно для заполнения'
        ]);

        if(!$validator->passes()){
            return response()->json([
                'code'   => 0,
                'error'  => $validator->errors()->toArray()
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
                    'code'  => 0,
                    'msg'   => 'Что-то пошло не так'
                ]);
            }else{

                return response()->json([
                    'product'  => $product
                ]);
            }
        }
    }

    public function show($id)
    {
        $product = Product::where('id', $id)->first();

        return $product;
    }
    
    public function edit($id)
    {
        $product = Product::where('id', $id)->first();

        return $product;
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
