<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SiteController extends Controller
{
    public function index()
    {
        return view('index', ['test' => 'test1']);
    }

    public function  category()
    {
        return view('category');
    }

    public function contacts()
    {
        return view('contacts');
    }

    public function auth()
    {
        return view('auth');
    }
}
