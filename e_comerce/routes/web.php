<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AccountWebController; 

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    
     Route::get('/account', [AccountWebController::class,'index'])->name('account.index');
     Route::get('/account/create', [AccountWebController::class,'create'])->name('account.create');


});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
