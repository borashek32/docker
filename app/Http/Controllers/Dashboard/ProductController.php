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
        $data = $request->post('data');
        $json_data = collect($data)->mapWithKeys(fn($item) => [$item[0] => $item[1]]);

        $product = Product::create([
            'article'     => $request->article,
            'name'        => $request->name,
            'status'      => $request->status,
            'data'        => $json_data
        ]);
        
        return redirect('/products');
    }

    public function show($id)
    {
        $product = Product::where('id', $id)->first();

        return $product;
        // return view('products.show', compact('product'));
    }
    
    public function edit($id)
    {
        //
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
