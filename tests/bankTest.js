"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
var bank_1 = require("../src/bank");
function testAccountCreation() {
    var bank = new bank_1.Bank();
    var userId = 101;
    var name = "Alice";
    var account = bank.createAccount(userId, name);
    // Assertions
    (0, assert_1.strict)(account, "Account should be created and not null");
    assert_1.strict.equal(account.userId, userId, "User ID should match the input");
    assert_1.strict.equal(account.name, name, "Name should match the input");
    (0, assert_1.strict)(account.accountNumber > 0, "Account number should be a positive integer");
    assert_1.strict.equal(account.balance, 0, "Initial balance should be 0");
    try {
        bank.createAccount(userId, name);
        throw new Error("Duplicate account creation should have thrown an error");
    }
    catch (error) {
        assert_1.strict.equal(error.message, "Account already exists", "Error message should indicate duplicate account creation");
    }
    console.log("Successfully passed account creation test");
}
testAccountCreation();
