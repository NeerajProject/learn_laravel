<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Account; // Import the Account Model

class AccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $accounts = [
            // --- ASSETS (1000 - 1999) ---
            [
                'name' => 'Cash and Cash Equivalents',
                'code' => '1000',
                'type' => 'Asset',
                'sub_type' => 'Current Asset',
            ],
            [
                'name' => 'Accounts Receivable',
                'code' => '1200',
                'type' => 'Asset',
                'sub_type' => 'Current Asset',
            ],
            [
                'name' => 'Equipment and Machinery',
                'code' => '1500',
                'type' => 'Asset',
                'sub_type' => 'Non-Current Asset',
            ],

            // --- LIABILITIES (2000 - 2999) ---
            [
                'name' => 'Accounts Payable',
                'code' => '2100',
                'type' => 'Liability',
                'sub_type' => 'Current Liability',
            ],
            [
                'name' => 'Long-Term Debt',
                'code' => '2500',
                'type' => 'Liability',
                'sub_type' => 'Non-Current Liability',
            ],

            // --- EQUITY (3000 - 3999) ---
            [
                'name' => 'Owner\'s Capital',
                'code' => '3000',
                'type' => 'Equity',
                'sub_type' => 'Owner\'s Equity',
            ],
            [
                'name' => 'Retained Earnings',
                'code' => '3500',
                'type' => 'Equity',
                'sub_type' => 'Owner\'s Equity',
            ],

            // --- REVENUE (4000 - 4999) ---
            [
                'name' => 'Service Revenue',
                'code' => '4000',
                'type' => 'Revenue',
                'sub_type' => 'Operating Revenue',
            ],
            [
                'name' => 'Interest Income',
                'code' => '4500',
                'type' => 'Revenue',
                'sub_type' => 'Non-Operating Revenue',
            ],

            // --- EXPENSES (5000 - 5999) ---
            [
                'name' => 'Salaries Expense',
                'code' => '5000',
                'type' => 'Expense',
                'sub_type' => 'Operating Expense',
            ],
            [
                'name' => 'Rent Expense',
                'code' => '5100',
                'type' => 'Expense',
                'sub_type' => 'Operating Expense',
            ],
        ];

        // Insert all defined accounts into the database
        Account::insert($accounts);
    }
}
