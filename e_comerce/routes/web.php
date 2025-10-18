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
     Route::post('/account/create', [AccountWebController::class,'store'])->name('account.store');
     Route::delete('/account/delete/{account}', [AccountWebController::class, 'destroy'])->name('account.destroy');
     Route::get('/account/{account}', [AccountWebController::class, 'edit'])->name('account.edit');
     Route::put('/account/{id}/update', [AccountWebController::class, 'update']);



});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
