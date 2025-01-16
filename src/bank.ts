import { BankType, AccountType } from "./types";

/**
 * This class implements a bank that can
 * maintain accounts and create new accounts
 */
export class Bank implements BankType {
  private accounts: AccountType[] = [];
  private usernames: string[] = [];

  /**
   * The constructor initialized the banks with accounts and usernames
   * @param accounts - array of accounts
   * @param usernames - array of usernames
   */
  public constructor(accounts: AccountType[], usernames: string[]) {
    this.accounts = accounts;
    this.usernames = usernames;
  }

  /**
   * To check if an account already exists using its id
   * @param id - account id, same as account number
   * @returns - true if account id exists, false otherwise
   */
  private findAccountById(id: number): AccountType | undefined {
    return this.accounts.find((account) => account.id === id);
  }

  /**
   * check if an account number is valid (10 digits)
   * @param accountNumber
   * @returns
   */
  private isAccountNumberInvalid(accountNumber: number) {
    return accountNumber.toString().length !== 10;
  }

  /**
   * check if username exists
   * @param username - username
   * @returns true if username exists, false otherwise
   */
  private isUsernameExists(username: string): boolean {
    return this.usernames.includes(username);
  }

  /**
   * create a new account for the user
   * @param username - username
   * @param age - user's age
   * @param accountNumber - account number
   * @returns - a valid account that the user can use
   */
  public createAccount(
    username: string,
    age: number,
    accountNumber: number
  ): AccountType {
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
    const account: AccountType = { id: accountNumber, balance: 0 };
    this.accounts.push(account);
    return account;
  }
}

// export class Bank {
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
