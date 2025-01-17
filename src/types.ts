// type for a bank account
export type AccountType = {
  id: number;
  balance: number;
};

// interface for a bank
export interface BankType {
  createAccount(
    username: string,
    age: number,
    accountNumber: number
  ): AccountType;

  deposit(accountNumber: number, amount: number): void;
}
