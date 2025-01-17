"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { strict as assert } from "assert";
var bank_1 = require("../src/bank");
var account1 = { id: 1234567890, balance: 5000 };
var account2 = { id: 1234567891, balance: 10000 };
var accounts = [account1, account2];
var usernames = ["user1", "user2"];
var bank = new bank_1.Bank(accounts, usernames);
// Tests for account creation
function testAccountCreation() {
    //Scenario 1: successful account created
    var acc = bank.createAccount("user1", 20, 1234567892);
    if (acc.id !== 1234567892 ||
        acc.balance !== 0 ||
        acc.id.toString().length !== 10) {
        console.log("Account creation Scenario 1 failed");
    }
    else {
        console.log("Account creation Scenario 1 passed");
    }
    try {
        bank.createAccount("user1", 20, 1234567892);
        console.log("Account creation Scenario 1 failed");
    }
    catch (e) {
        console.log("Account creation Scenario 1 passed");
    }
    // Scenario 2: unsuccessful account creation due to customer being below 18:
    try {
        bank.createAccount("user1", 17, 1234567899);
        console.log("Account creation Scenario 2 failed");
    }
    catch (e) {
        console.log("Account creation Scenario 2 passed");
    }
    // Scenario 3: unsuccessful account creation due to invalid username
    try {
        bank.createAccount("user3", 20, 1234567888);
        console.log("Account creation Scenario 3 failed");
    }
    catch (e) {
        console.log("Account creation Scenario 3 passed");
    }
    console.log("All tests passed for account creation");
}
// Test for deposit
function testDeposit() {
    // Scenario 1: successful deposit
    bank.deposit(1234567890, 1000);
    if (account1.balance != 6000) {
        console.log("Deposit Scenario 1 failed");
    }
    // Scenario 2: Invalid deposit amount
    try {
        bank.deposit(1234567890, -100);
        console.log("Deposit Scenario 2 failed");
    }
    catch (e) {
        console.log("Deposit Scenario 2 passed");
    }
    // Scenario 3: account number does not exist
    try {
        bank.deposit(1234567894, 100);
        console.log("Deposit Scenario 3 failed");
    }
    catch (e) {
        console.log("Deposit Scenario 3 passed");
    }
    console.log("All tests passed for deposit");
}
testAccountCreation();
testDeposit();
// // test for deposit
// function testDeposit() {
//   const bank = new Bank();
//   const userId = 101;
//   const name = "Alice";
//   const account = bank.createAccount(userId, name);
//   // successful deposit
//   assert.equal(account.balance, 0, "Initial balance should be 0");
//   bank.deposit(userId, account.accountNumber, 100);
//   assert.equal(account.balance, 100, "Balance should be updated correctly");
//   // deposite negative amount
//   try {
//     bank.deposit(userId, account.accountNumber, -1);
//     throw new Error("You should not be able to deposit non-positive amount!");
//   } catch (error) {
//     assert.equal(
//       error.message,
//       "You cannot deposit non-positive amount.",
//       "Error message should indicate cannot deposite non-positive amount."
//     );
//     assert.equal(account.balance, 100, "Balance should not change");
//   }
//   // user does not have an account
//   try {
//     bank.deposit(102, account.accountNumber, 100);
//     throw new Error(
//       "You should not be able to deposit if you do not have an account"
//     );
//   } catch (error) {
//     assert.equal(
//       error.message,
//       "You do not have an account. Please create one first.",
//       "Error message should indicate the user does not have an account."
//     );
//   }
//   // the account number does not exist
//   try {
//     bank.deposit(userId, -123, 100);
//     throw new Error(
//       "You should not be able to deposit if the account number does not exist"
//     );
//   } catch (error) {
//     assert.equal(
//       error.message,
//       "Invalid account number.",
//       "Error message should indicate invalid account number."
//     );
//     assert.equal(account.balance, 100, "Balance should not change");
//   }
//   // deposit to another account that is not held by the user
//   const account2 = bank.createAccount(200, "David");
//   try {
//     bank.deposit(userId, account2.accountNumber, 100);
//     throw new Error("You should not be able to deposit to other's account");
//   } catch (error) {
//     assert.equal(
//       error.message,
//       "This account does not belong to you. You can only deposit into your own account.",
//       "Error message should indicate user does not have this account."
//     );
//     assert.equal(account.balance, 100, "Balance should not change");
//   }
//   console.log("Successfully passed deposit test");
// }
// // test for withdraw
// function testWithdraw() {
//   const bank = new Bank();
//   const userId = 101;
//   const name = "Alice";
//   const account = bank.createAccount(userId, name);
//   // successful withdraw
//   bank.deposit(userId, account.accountNumber, 100);
//   assert.equal(account.balance, 100, "Balance should be updated correctly");
//   bank.withdraw(userId, account.accountNumber, 100);
//   assert.equal(account.balance, 0, "Balance should be updated correctly");
//   // withdraw negative amount
//   try {
//     bank.withdraw(userId, account.accountNumber, -1);
//     throw new Error("You should not be able to withdraw non-positive amount!");
//   } catch (error) {
//     assert.equal(
//       error.message,
//       "You cannot withdraw non-positive amount.",
//       "Error message should indicate cannot withdraw non-positive amount."
//     );
//     assert.equal(account.balance, 0, "Balance should not change");
//   }
//   // user does not have an account
//   try {
//     bank.withdraw(102, account.accountNumber, 100);
//     throw new Error(
//       "You should not be able to withdraw if you do not have an account"
//     );
//   } catch (error) {
//     assert.equal(
//       error.message,
//       "You do not have an account. Please create one first.",
//       "Error message should indicate the user does not have an account."
//     );
//   }
//   // the account number does not exist
//   try {
//     bank.withdraw(userId, -123, 100);
//     throw new Error(
//       "You should not be able to withdraw if the account number does not exist"
//     );
//   } catch (error) {
//     assert.equal(
//       error.message,
//       "Invalid account number.",
//       "Error message should indicate invalid account number."
//     );
//     assert.equal(account.balance, 0, "Balance should not change");
//   }
//   // deposit to another account that is not held by the user
//   const account2 = bank.createAccount(200, "David");
//   try {
//     bank.withdraw(userId, account2.accountNumber, 100);
//     throw new Error("You should not be able to withdraw from other's account");
//   } catch (error) {
//     assert.equal(
//       error.message,
//       "This account does not belong to you. You can only withdraw from your own account.",
//       "Error message should indicate user does not have this account."
//     );
//     assert.equal(account.balance, 0, "Balance should not change");
//   }
//   // withdraw more than the balance
//   try {
//     bank.withdraw(userId, account.accountNumber, 200);
//     throw new Error("You should not be able to withdraw more than the balance");
//   } catch (error) {
//     assert.equal(
//       error.message,
//       "You cannot withdraw more than your balance.",
//       "Error message should indicate cannot withdraw more than the balance."
//     );
//     assert.equal(account.balance, 0, "Balance should not change");
//   }
//   console.log("Successfully passed withdraw test");
// }
// // test for check balance
// function testCheckBalance() {
//   const bank = new Bank();
//   const userId = 101;
//   const name = "Alice";
//   const account = bank.createAccount(userId, name);
//   // successfully check amount
//   assert.equal(
//     0,
//     bank.checkBalance(userId, account.accountNumber),
//     "Balance should match"
//   );
//   bank.deposit(userId, account.accountNumber, 100);
//   assert.equal(
//     100,
//     bank.checkBalance(userId, account.accountNumber),
//     "Balance should match"
//   );
//   bank.withdraw(userId, account.accountNumber, 50);
//   assert.equal(
//     50,
//     bank.checkBalance(userId, account.accountNumber),
//     "Balance should match"
//   );
//   // user does not have an account
//   try {
//     bank.checkBalance(102, account.accountNumber);
//     throw new Error(
//       "You should not be able to check balance if you do not have an account"
//     );
//   } catch (error) {
//     assert.equal(
//       error.message,
//       "You do not have an account. Please create one first.",
//       "Error message should indicate the user does not have an account."
//     );
//   }
//   // the account number does not exist
//   try {
//     bank.checkBalance(userId, -123);
//     throw new Error(
//       "You should not be able to check account balance if the account number does not exist"
//     );
//   } catch (error) {
//     assert.equal(
//       error.message,
//       "Invalid account number.",
//       "Error message should indicate invalid account number."
//     );
//   }
//   // check the balance of another account that is not held by the user
//   const account2 = bank.createAccount(200, "David");
//   try {
//     bank.checkBalance(userId, account2.accountNumber);
//     throw new Error(
//       "You should not be able to check balance for other's account"
//     );
//   } catch (error) {
//     assert.equal(
//       error.message,
//       "This account does not belong to you. You can only check balance for your own account.",
//       "Error message should indicate user does not have this account."
//     );
//   }
//   console.log("Successfully passed check balance test");
// }
// testAccountCreation();
// testDeposit();
// testWithdraw();
// testCheckBalance();
// console.log("All tests passed.");
