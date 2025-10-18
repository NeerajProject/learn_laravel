<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Account;
use Illuminate\Validation\Rule;

class AccountWebController extends Controller
{
    /**
     * Display a listing of the resource (READ - List View).
     * GET /accounts
     */
public function index(Request $request)
{
    $query = Account::query();

    // Search by name or code
    if ($request->has('search') && $request->search != '') {
        $search = $request->search;
        $query->where(function($q) use ($search) {
            $q->where('name', 'like', "%{$search}%")
              ->orWhere('code', 'like', "%{$search}%");
        });
    }

    // Filter by type
    if ($request->has('type') && $request->type != '') {
        $query->where('type', $request->type);
    }

    // Paginate with query string
    $accounts = $query->orderBy('id', 'desc')
                     ->paginate(50)
                     ->withQueryString();

    return Inertia::render('account/index', [
        'accounts' => $accounts,
        'filters' => $request->only(['type', 'search']),
    ]);
}


    /**
     * Show the form for creating a new resource (CREATE - Form View).
     * GET /accounts/create
     */
    public function create()
    {
        return Inertia::render('account/create',[]);
    }

    /**
     * Store a newly created resource in storage (CREATE - POST).
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            // Ensure the code is unique in the 'accounts' table
            'code' => 'required|string|max:20|unique:accounts,code',
            'type' => ['required', Rule::in(['Asset', 'Liability', 'Equity', 'Revenue', 'Expense'])],
            'sub_type' => 'nullable|string|max:100',
        ]);

        Account::create($validated);

        // Redirect back to the index page with a success flash message
        return redirect()->route('account.index')
            ->with('success', 'Account created successfully!');
    }

    /**
     * Show the form for editing the specified resource (UPDATE - Form View).
     * GET /accounts/{account}/edit
     */

    public function edit($account) {
    $account = Account::find($account);
    return Inertia::render('account/edit', ['account' => $account]);
}
    
    /**
     * Update the specified resource in storage (UPDATE - PUT/PATCH).
     */
public function update(Request $request, $id)
    {
        $account = Account::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
            'code' => 'required|string|max:50|unique:accounts,code,' . $id,
            'type' => 'required|string|in:Asset,Liability,Equity,Revenue,Expense',
        ]);

        $account->update($request->all());

        return redirect()->route('account.index')
            ->with('success', 'Account updated successfully.');
    }


    /**
     * Remove the specified resource from storage (DELETE).
     */
public function destroy($id)
{
    // dd($id);
    $account = Account::find($id);

    if (!$account) {
        return redirect()->back()->with('error', 'Account not found.');
    }

    $account->delete();

    return redirect()->route('account.index')->with('success', 'Account deleted successfully.');
}


}
