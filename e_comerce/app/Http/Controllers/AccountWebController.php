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
    public function index()
    {
        $accounts = Account::orderBy('code')->get();

        return Inertia::render('Accounts/Index', [
            'accounts' => $accounts,
            'accountTypes' => ['Asset', 'Liability', 'Equity', 'Revenue', 'Expense'],
        ]);
    }

    /**
     * Show the form for creating a new resource (CREATE - Form View).
     * GET /accounts/create
     */
    public function create()
    {
        return Inertia::render('Accounts/Create', [
            'accountTypes' => ['Asset', 'Liability', 'Equity', 'Revenue', 'Expense'],
        ]);
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
        return redirect()->route('accounts.index')
            ->with('success', 'Account created successfully!');
    }

    /**
     * Show the form for editing the specified resource (UPDATE - Form View).
     * GET /accounts/{account}/edit
     */
    public function edit(Account $account)
    {
        // Renders the Accounts/Edit React component with the specific account data
        return Inertia::render('Accounts/Edit', [
            'account' => $account,
            'accountTypes' => ['Asset', 'Liability', 'Equity', 'Revenue', 'Expense'],
        ]);
    }
    
    /**
     * Update the specified resource in storage (UPDATE - PUT/PATCH).
     */
    public function update(Request $request, Account $account)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            // Unique rule: ignore the current account's ID for uniqueness check
            'code' => ['required', 'string', 'max:20', Rule::unique('accounts', 'code')->ignore($account->id)],
            'type' => ['required', Rule::in(['Asset', 'Liability', 'Equity', 'Revenue', 'Expense'])],
            'sub_type' => 'nullable|string|max:100',
        ]);

        $account->update($validated);

        // Redirect back to the index page with a success flash message
        return redirect()->route('accounts.index')
            ->with('success', 'Account updated successfully!');
    }

    /**
     * Remove the specified resource from storage (DELETE).
     */
    public function destroy(Account $account)
    {
        // In a real application, you would add a check here to ensure 
        // the account is not linked to any transactions before deleting.

        $account->delete();

        // Redirect back to the index page after deletion
        return redirect()->route('accounts.index')
            ->with('success', 'Account deleted successfully.');
    }
}
