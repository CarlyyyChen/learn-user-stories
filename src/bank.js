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
    return Bank;
}());
exports.Bank = Bank;
