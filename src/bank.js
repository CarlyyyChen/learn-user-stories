"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
var Bank = /** @class */ (function () {
    function Bank() {
        //existing accounts
        this.accounts = new Map();
        this.currentAccountNumber = 1000; // Starting account number
    }
    // Method to check if a userId exists
    Bank.prototype.isUserIdExists = function (userId) {
        for (var _i = 0, _a = Array.from(this.accounts.values()); _i < _a.length; _i++) {
            var account = _a[_i];
            if (account.userId === userId) {
                return true; // Found the userId
            }
        }
        return false; // userId does not exist
    };
    // Method to generate the next account number
    Bank.prototype.generateAccountNumber = function () {
        return this.currentAccountNumber++;
    };
    /**
     * Creates a new bank account for a user.
     * @param userId - The unique identifier for the user. Must not already exist.
     * @param name - The account holder's name (can have duplicates).
     * @returns A `BankAccount` object with a unique account number, user ID, name, and a balance of 0.
     * @throws Error if an account with the given `userId` already exists.
     */
    Bank.prototype.createAccount = function (userId, name) {
        if (this.isUserIdExists(userId)) {
            throw new Error("Account already exists");
        }
        var accountNumber = this.generateAccountNumber();
        var account = {
            accountNumber: accountNumber,
            name: name,
            userId: userId,
            balance: 0,
        };
        this.accounts.set(accountNumber, account);
        return account;
    };
    /**
     * Deposits a specified amount into a user's bank account.
     *
     * @param userId - The unique identifier of the user attempting the deposit.
     * @param accountNumber - The account number into which the deposit is made.
     * @param amount - The amount of money to deposit. Must be greater than 0.
     *
     * @throws Error if the amount is non-positive.
     * @throws Error if the user does not have an account.
     * @throws Error if the account number is invalid.
     * @throws Error if the account does not belong to the specified user.
     */
    Bank.prototype.deposit = function (userId, accountNumber, amount) {
        if (amount <= 0) {
            throw new Error("You cannot deposit non-positive amount.");
        }
        if (!this.isUserIdExists(userId)) {
            throw new Error("You do not have an account. Please create one first.");
        }
        if (!this.accounts.has(accountNumber)) {
            throw new Error("Invalid account number.");
        }
        var account = this.accounts.get(accountNumber);
        if ((account === null || account === void 0 ? void 0 : account.userId) != userId) {
            throw new Error("This account does not belong to you. You can only deposit into your own account.");
        }
        account.balance += amount;
    };
    /**
     * Withdraws a specified amount from a user's bank account.
     *
     * @param userId - The unique identifier of the user attempting the deposit.
     * @param accountNumber - The account number into which the deposit is made.
     * @param amount - The amount of money to deposit. Must be greater than 0.
     *
     * @throws Error if the amount is non-positive.
     * @throws Error if the user does not have an account.
     * @throws Error if the account number is invalid.
     * @throws Error if the account does not belong to the specified user.
     * @throws Error if the withdraw amount is more than account balance.
     */
    Bank.prototype.withdraw = function (userId, accountNumber, amount) {
        if (amount <= 0) {
            throw new Error("You cannot withdraw non-positive amount.");
        }
        if (!this.isUserIdExists(userId)) {
            throw new Error("You do not have an account. Please create one first.");
        }
        if (!this.accounts.has(accountNumber)) {
            throw new Error("Invalid account number.");
        }
        var account = this.accounts.get(accountNumber);
        if ((account === null || account === void 0 ? void 0 : account.userId) != userId) {
            throw new Error("This account does not belong to you. You can only withdraw from your own account.");
        }
        if (account.balance < amount) {
            throw new Error("You cannot withdraw more than your balance.");
        }
        account.balance -= amount;
    };
    /**
     * Check the balance of a user's bank account.
     *
     * @param userId - The unique identifier of the user attempting the deposit.
     * @param accountNumber - The account number into which the deposit is made.
     *
     * @throws Error if the user does not have an account.
     * @throws Error if the account number is invalid.
     * @throws Error if the account does not belong to the specified user.
     * @returns the account balance.
     */
    Bank.prototype.checkBalance = function (userId, accountNumber) {
        if (!this.isUserIdExists(userId)) {
            throw new Error("You do not have an account. Please create one first.");
        }
        if (!this.accounts.has(accountNumber)) {
            throw new Error("Invalid account number.");
        }
        var account = this.accounts.get(accountNumber);
        if ((account === null || account === void 0 ? void 0 : account.userId) != userId) {
            throw new Error("This account does not belong to you. You can only check balance for your own account.");
        }
        return account.balance;
    };
    return Bank;
}());
exports.Bank = Bank;
