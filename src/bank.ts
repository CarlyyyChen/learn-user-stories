// interface for a bank account
export interface BankAccount {
  accountNumber: number; // account's unique id
  name: string; // user's name, can have duplicates
  userId: number; // user's personal id, should be unique
  balance: number; // account balance
}

export class Bank {
  //existing accounts
  private accounts: Map<number, BankAccount> = new Map<number, BankAccount>();
  private currentAccountNumber: number = 1000; // Starting account number

  // Method to check if a userId exists
  isUserIdExists(userId: number): boolean {
    for (const account of Array.from(this.accounts.values())) {
      if (account.userId === userId) {
        return true; // Found the userId
      }
    }
    return false; // userId does not exist
  }

  // Method to generate the next account number
  private generateAccountNumber(): number {
    return this.currentAccountNumber++;
  }

  /**
   * Creates a new bank account for a user.
   * @param userId - The unique identifier for the user. Must not already exist.
   * @param name - The account holder's name (can have duplicates).
   * @returns A `BankAccount` object with a unique account number, user ID, name, and a balance of 0.
   * @throws Error if an account with the given `userId` already exists.
   */
  createAccount(userId: number, name: string): BankAccount {
    if (this.isUserIdExists(userId)) {
      throw new Error("Account already exists");
    }
    const accountNumber = this.generateAccountNumber();
    const account: BankAccount = {
      accountNumber,
      name,
      userId,
      balance: 0,
    };
    this.accounts.set(accountNumber, account);
    return account;
  }
}
