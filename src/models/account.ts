import { AccountInterface, CheckingAccountInterface, SavingsAccountInterface } from '../interfaces/accountInterface';

export class Account implements AccountInterface {
    accountNumber: string;
    balance: number;
    clientId: string;

    constructor(accountNumber: string, balance: number, clientId: string) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.clientId = clientId;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (amount > this.balance) {
            throw new Error('Insufficient funds');
        }
        this.balance -= amount;
    }

    transfer(targetAccount: AccountInterface, amount: number): void {
        this.withdraw(amount);
        targetAccount.deposit(amount);
    }
}

export class CheckingAccount extends Account implements CheckingAccountInterface {
    overdraftLimit: number;

    constructor(accountNumber: string, balance: number, clientId: string, overdraftLimit: number) {
        super(accountNumber, balance, clientId);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount: number): void {
        if (amount > this.balance + this.overdraftLimit) {
            throw new Error('Overdraft limit exceeded');
        }
        this.balance -= amount;
    }
}

export class SavingsAccount extends Account implements SavingsAccountInterface {
    interestRate: number;

    constructor(accountNumber: string, balance: number, clientId: string, interestRate: number) {
        super(accountNumber, balance, clientId);
        this.interestRate = interestRate;
    }
}
