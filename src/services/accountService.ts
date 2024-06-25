import { Account, CheckingAccount, SavingsAccount } from '../models/account';

export class AccountService {
    private accounts: Account[] = [];

    createCheckingAccount(accountNumber: string, balance: number, clientId: string, overdraftLimit: number): CheckingAccount {
        const account = new CheckingAccount(accountNumber, balance, clientId, overdraftLimit);
        this.accounts.push(account);
        return account;
    }

    createSavingsAccount(accountNumber: string, balance: number, clientId: string, interestRate: number): SavingsAccount {
        const account = new SavingsAccount(accountNumber, balance, clientId, interestRate);
        this.accounts.push(account);
        return account;
    }

    getAccountByNumber(accountNumber: string): Account | undefined {
        return this.accounts.find(account => account.accountNumber === accountNumber);
    }
}
