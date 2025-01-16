"use strict";
// import { BankAccount } from "./types";
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
            throw new Error("Too yound to create an account");
        }
        var account = { id: accountNumber, balance: 0 };
        this.accounts.push(account);
        return account;
    };
    return Bank;
}());
exports.Bank = Bank;
// export class Bank {
//   //existing accounts
//   private accounts: Map<number, BankAccount> = new Map<number, BankAccount>();
//   private currentAccountNumber: number = 1000; // Starting account number
//   // Method to check if a userId exists
//   isUserIdExists(userId: number): boolean {
//     for (const account of Array.from(this.accounts.values())) {
//       if (account.userId === userId) {
//         return true; // Found the userId
//       }
//     }
//     return false; // userId does not exist
//   }
//   // Method to generate the next account number
//   private generateAccountNumber(): number {
//     return this.currentAccountNumber++;
//   }
//   /**
//    * Creates a new bank account for a user.
//    * @param userId - The unique identifier for the user. Must not already exist.
//    * @param name - The account holder's name (can have duplicates).
//    * @returns A `BankAccount` object with a unique account number, user ID, name, and a balance of 0.
//    * @throws Error if an account with the given `userId` already exists.
//    */
//   createAccount(userId: number, name: string): BankAccount {
//     if (this.isUserIdExists(userId)) {
//       throw new Error("Account already exists");
//     }
//     const accountNumber = this.generateAccountNumber();
//     const account: BankAccount = {
//       accountNumber,
//       name,
//       userId,
//       balance: 0,
//     };
//     this.accounts.set(accountNumber, account);
//     return account;
//   }
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
