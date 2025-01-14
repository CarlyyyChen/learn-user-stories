import { strict as assert } from "assert";
import { Bank } from "../src/bank";

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

testAccountCreation();
