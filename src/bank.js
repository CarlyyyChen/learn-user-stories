"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
/**
 * This class implements a bank that can
 * maintain accounts and create new accounts
 */
var Bank = /** @class */ (function () {
    /**
     * The constructor initialized the banks with accounts and usernames
     * @param accounts - array of accounts
     * @param usernames - array of usernames
     */
    function Bank(accounts, usernames) {
        this.accounts = [];
        this.usernames = [];
        this.accounts = accounts;
        this.usernames = usernames;
    }
    /**
     * To check if an account already exists using its id
     * @param id - account id, same as account number
     * @returns - true if account id exists, false otherwise
     */
    Bank.prototype.findAccountById = function (id) {
        return this.accounts.find(function (account) { return account.id === id; });
    };
    /**
     * check if an account number is valid (10 digits)
     * @param accountNumber
     * @returns
     */
    Bank.prototype.isAccountNumberInvalid = function (accountNumber) {
        return accountNumber.toString().length !== 10;
    };
    /**
     * check if username exists
     * @param username - username
     * @returns true if username exists, false otherwise
     */
    Bank.prototype.isUsernameExists = function (username) {
        return this.usernames.includes(username);
    };
    /**
     * create a new account for the user
     * @param username - username
     * @param age - user's age
     * @param accountNumber - account number
     * @returns - a valid account that the user can use
     */
    Bank.prototype.createAccount = function (username, age, accountNumber) {
        if (!this.isUsernameExists(username)) {
            throw new Error("User not found");
        }
        if (this.isAccountNumberInvalid(accountNumber)) {
            throw new Error("Invalid account number");
        }
        if (this.findAccountById(accountNumber)) {
            throw new Error("Account arealdy exists");
        }
        if (age < 18) {
            throw new Error("User is under 18");
        }
        var account = { id: accountNumber, balance: 0 };
        this.accounts.push(account);
        return account;
    };
    /**
     * deposit money into account
     * @param accountNumber - account id
     * @param amount - the amount to be deposit into the account, cannot be negative
     * @throws Error if the account number is invalid.
     * @throws Error if the amount is negative.
     */
    Bank.prototype.deposit = function (accountNumber, amount) {
        var account = this.findAccountById(accountNumber);
        if (!account) {
            throw new Error("Account does not exist");
        }
        if (amount < 0) {
            throw new Error("Cannot deposit negative amount");
        }
        account.balance += amount;
    };
    /**
     * withdraw money from a bank account
     * @param accountNumber - account id
     * @param amount - amount of money to withdraw, must not exceed account balance
     * @throws Error if withdraw amount is more than account balance
     * @throws Error if account number does not exist
     */
    Bank.prototype.withdraw = function (accountNumber, amount) {
        var account = this.findAccountById(accountNumber);
        if (!account) {
            throw new Error("Account does not exist");
        }
        if (amount > account.balance) {
            throw new Error("Cannot withdraw more than balance");
        }
        account.balance -= amount;
    };
    /**
     * to check the balance of a bank account using its number
     * @param accountNumber - account id
     * @returns - the balance amount
     * @throws Error if account number does not exist
     */
    Bank.prototype.checkBalance = function (accountNumber) {
        var account = this.findAccountById(accountNumber);
        if (!account) {
            throw new Error("Account does not exist");
        }
        return account.balance;
    };
    return Bank;
}());
exports.Bank = Bank;
