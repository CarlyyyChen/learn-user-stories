/**
 * type for a bank account
 * id - unique identifier, should have 10 digits
 * balance - current account balance
 */
export type AccountType = {
  id: number;
  balance: number;
};

/**
 * interface for a bank
 * It should have methods to create account, deposit money
 * withdraw money, and check balance
 */
export interface BankType {
  createAccount(
    username: string,
    age: number,
    accountNumber: number
  ): AccountType;

  deposit(accountNumber: number, amount: number): void;
  withdraw(accountNumber: number, amount: number): void;
  checkBalance(accountNumber): number;
}
