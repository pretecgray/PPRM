<?php

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



Route::get('/', 'SiteController@index');
Route::get('/contacts', 'SiteController@contacts');
Route::get('/category/{id}', 'SiteController@category');
Route::get('/auth', 'SiteController@auth');