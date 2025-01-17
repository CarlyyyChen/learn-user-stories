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
        if (!this.findAccountById(accountNumber)) {
            throw new Error("Account does not exist");
        }
        if (amount < 0) {
            throw new Error("Cannot deposit negative amount");
        }
        var account = this.findAccountById(accountNumber);
        account.balance += amount;
    };
    return Bank;
}());
exports.Bank = Bank;
// export class Bank {
//   /**
//    * Deposits a specified amount into a user's bank account.
//    *
//    * @param userId - The unique identifier of the user attempting the deposit.
//    * @param accountNumber - The account number into which the deposit is made.
//    * @param amount - The amount of money to deposit. Must be greater than 0.
//    *
//    * @throws Error if the amount is non-positive.
//    * @throws Error if the user does not have an account.
//    * @throws Error if the account number is invalid.
//    * @throws Error if the account does not belong to the specified user.
//    */
//   deposit(userId: number, accountNumber: number, amount: number): void {
//     if (amount <= 0) {
//       throw new Error("You cannot deposit non-positive amount.");
//     }
//     if (!this.isUserIdExists(userId)) {
//       throw new Error("You do not have an account. Please create one first.");
//     }
//     if (!this.accounts.has(accountNumber)) {
//       throw new Error("Invalid account number.");
//     }
//     const account = this.accounts.get(accountNumber);
//     if (account?.userId != userId) {
//       throw new Error(
//         "This account does not belong to you. You can only deposit into your own account."
//       );
//     }
//     account.balance += amount;
//   }
//   /**
//    * Withdraws a specified amount from a user's bank account.
//    *
//    * @param userId - The unique identifier of the user attempting the deposit.
//    * @param accountNumber - The account number into which the deposit is made.
//    * @param amount - The amount of money to deposit. Must be greater than 0.
//    *
//    * @throws Error if the amount is non-positive.
//    * @throws Error if the user does not have an account.
//    * @throws Error if the account number is invalid.
//    * @throws Error if the account does not belong to the specified user.
//    * @throws Error if the withdraw amount is more than account balance.
//    */
//   withdraw(userId: number, accountNumber: number, amount: number): void {
//     if (amount <= 0) {
//       throw new Error("You cannot withdraw non-positive amount.");
//     }
//     if (!this.isUserIdExists(userId)) {
//       throw new Error("You do not have an account. Please create one first.");
//     }
//     if (!this.accounts.has(accountNumber)) {
//       throw new Error("Invalid account number.");
//     }
//     const account = this.accounts.get(accountNumber);
//     if (account?.userId != userId) {
//       throw new Error(
//         "This account does not belong to you. You can only withdraw from your own account."
//       );
//     }
//     if (account.balance < amount) {
//       throw new Error("You cannot withdraw more than your balance.");
//     }
//     account.balance -= amount;
//   }
//   /**
//    * Check the balance of a user's bank account.
//    *
//    * @param userId - The unique identifier of the user attempting the deposit.
//    * @param accountNumber - The account number into which the deposit is made.
//    *
//    * @throws Error if the user does not have an account.
//    * @throws Error if the account number is invalid.
//    * @throws Error if the account does not belong to the specified user.
//    * @returns the account balance.
//    */
//   checkBalance(userId: number, accountNumber: number): number {
//     if (!this.isUserIdExists(userId)) {
//       throw new Error("You do not have an account. Please create one first.");
//     }
//     if (!this.accounts.has(accountNumber)) {
//       throw new Error("Invalid account number.");
//     }
//     const account = this.accounts.get(accountNumber);
//     if (account?.userId != userId) {
//       throw new Error(
//         "This account does not belong to you. You can only check balance for your own account."
//       );
//     }
//     return account.balance;
//   }
// }
