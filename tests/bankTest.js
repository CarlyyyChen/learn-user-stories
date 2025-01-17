"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bank_1 = require("../src/bank");
// Initialize accounts, users and the bank for tests
var account1 = { id: 1234567890, balance: 5000 };
var account2 = { id: 1234567891, balance: 10000 };
var accounts = [account1, account2];
var usernames = ["user1", "user2"];
var bank = new bank_1.Bank(accounts, usernames);
// Tests for account creation feature
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
// Test for deposit feature
function testDeposit() {
    // Scenario 1: successful deposit
    bank.deposit(1234567890, 1000);
    if (account1.balance != 6000) {
        console.log("Deposit Scenario 1 failed");
    }
    console.log("Deposit Scenario 1 passed");
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
// Test for the withdraw feature
function testWithdraw() {
    // Scenario 1: Successful money withdraw
    bank.withdraw(1234567891, 1000);
    if (account2.balance != 9000) {
        console.log("Withdraw Scenario 1 failed");
    }
    console.log("Withdraw Scenario 1 passed");
    // Scenario 2: Withdraw money more than account balance
    try {
        bank.withdraw(1234567890, 8000);
        console.log("Withdraw Scenario 2 failed");
    }
    catch (e) {
        console.log("Withdraw Scenario 2 passed");
    }
    // Scenario 3: Withdraw money from invalid accounts
    try {
        bank.withdraw(1234567892, 6000);
        console.log("Withdraw Scenario 3 failed");
    }
    catch (e) {
        console.log("Withdraw Scenario 3 passed");
    }
    console.log("All tests passed for withdraw");
}
// Test for the check balance feature
function testCheckBalance() {
    // Scenario 1: Successfully check account balance
    if (account1.balance !== bank.checkBalance(account1.id)) {
        console.log("Check balance scenario 1 failed");
    }
    console.log("Check balance scenario 1 passed");
    // Scenario 2: Unable to check balance if the account number is invalid
    try {
        bank.checkBalance(2222222222);
        console.log("Check balance scenario 2 failed");
    }
    catch (e) {
        console.log("Check balance scenario 2 passed");
    }
    console.log("All tests passed for check balance");
}
// Run all tests
testAccountCreation();
testDeposit();
testWithdraw();
testCheckBalance();
console.log("All tests passed.");
