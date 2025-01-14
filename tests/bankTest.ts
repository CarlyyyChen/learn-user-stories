import { strict as assert } from "assert";
import { Bank } from "../src/bank";

//test for account creation
function testAccountCreation() {
  const bank = new Bank();

  const userId = 101;
  const name = "Alice";
  const account = bank.createAccount(userId, name);

  // Assertions
  assert(account, "Account should be created and not null");
  assert.equal(account.userId, userId, "User ID should match the input");
  assert.equal(account.name, name, "Name should match the input");
  assert(
    account.accountNumber > 0,
    "Account number should be a positive integer"
  );
  assert.equal(account.balance, 0, "Initial balance should be 0");

  try {
    bank.createAccount(userId, name);
    throw new Error("Duplicate account creation should have thrown an error");
  } catch (error) {
    assert.equal(
      error.message,
      "Account already exists",
      "Error message should indicate duplicate account creation"
    );
  }

  console.log("Successfully passed account creation test");
}

// test for deposit
function testDeposit() {
  const bank = new Bank();

  const userId = 101;
  const name = "Alice";
  const account = bank.createAccount(userId, name);

  // successful deposit
  assert.equal(account.balance, 0, "Initial balance should be 0");

  bank.deposit(userId, account.accountNumber, 100);
  assert.equal(account.balance, 100, "Balance should be updated correctly");

  // deposite negative amount
  try {
    bank.deposit(userId, account.accountNumber, -1);
    throw new Error("You should not be able to deposit non-positive amount!");
  } catch (error) {
    assert.equal(
      error.message,
      "You cannot deposit non-positive amount.",
      "Error message should indicate cannot deposite non-positive amount."
    );
    assert.equal(account.balance, 100, "Balance should not change");
  }

  // user does not have an account
  try {
    bank.deposit(102, account.accountNumber, 100);
    throw new Error(
      "You should not be able deposit if you do not have an account"
    );
  } catch (error) {
    assert.equal(
      error.message,
      "You do not have an account. Please create one first.",
      "Error message should indicate the user does not have an account."
    );
  }

  // the account number does not exist
  try {
    bank.deposit(userId, -123, 100);
    throw new Error(
      "You should not be able deposit if the account number does not exist"
    );
  } catch (error) {
    assert.equal(
      error.message,
      "Invalid account number.",
      "Error message should indicate invalid account number."
    );
    assert.equal(account.balance, 100, "Balance should not change");
  }

  // deposit to another account that is not held by the user
  const account2 = bank.createAccount(200, "David");
  try {
    bank.deposit(userId, account2.accountNumber, 100);
    throw new Error("You should not be able deposit to other's account");
  } catch (error) {
    assert.equal(
      error.message,
      "This account does not belong to you. You can only deposit into your own account.",
      "Error message should indicate user does not have this account."
    );
    assert.equal(account.balance, 100, "Balance should not change");
  }

  console.log("Successfully passed deposit test");
}

testAccountCreation();
testDeposit();
