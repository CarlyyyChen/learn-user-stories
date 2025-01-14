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

  /**
   * Deposits a specified amount into a user's bank account.
   *
   * @param userId - The unique identifier of the user attempting the deposit.
   * @param accountNumber - The account number into which the deposit is made.
   * @param amount - The amount of money to deposit. Must be greater than 0.
   *
   * @throws Error if the amount is non-positive.
   * @throws Error if the user does not have an account.
   * @throws Error if the account number is invalid.
   * @throws Error if the account does not belong to the specified user.
   */
  deposit(userId: number, accountNumber: number, amount: number): void {
    if (amount <= 0) {
      throw new Error("You cannot deposit non-positive amount.");
    }
    if (!this.isUserIdExists(userId)) {
      throw new Error("You do not have an account. Please create one first.");
    }
    if (!this.accounts.has(accountNumber)) {
      throw new Error("Invalid account number.");
    }
    const account = this.accounts.get(accountNumber);
    if (account?.userId != userId) {
      throw new Error(
        "This account does not belong to you. You can only deposit into your own account."
      );
    }
    account.balance += amount;
  }
}
