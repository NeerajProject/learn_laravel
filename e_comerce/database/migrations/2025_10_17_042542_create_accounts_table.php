<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('accounts', function (Blueprint $table) {
                   // Primary Key
            $table->id();

            // Account Name (e.g., "Cash and Cash Equivalents")
            $table->string('name')->comment('The descriptive name of the account.');

            // Account Code (e.g., "1000")
            // Must be unique to serve as the main Chart of Accounts identifier.
            $table->string('code', 20)->unique()->comment('The unique numeric or alphanumeric code for the account.');

            // Primary Account Type (The 5 major categories: Asset, Liability, etc.)
            // Uses an ENUM to strictly enforce the five fundamental account types.
            $table->enum('type', [
                'Asset',
                'Liability',
                'Equity',
                'Revenue',
                'Expense'
            ])->comment('The main classification of the account (Asset, Liability, Equity, Revenue, or Expense).');

            // Secondary Classification (e.g., 'Current Asset', 'Accounts Receivable')
            // This field can be used for the detailed grouping from your original list.
            $table->string('sub_type', 100)->nullable()->comment('The detailed classification of the account, like "Current Asset" or "Notes Payable".');

            // Standard Timestamps (created_at and updated_at)
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('accounts');
    }
};
