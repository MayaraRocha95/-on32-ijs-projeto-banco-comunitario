export interface AccountInterface {
    accountNumber: string;
    balance: number;
    clientId: string;
    deposit(amount: number): void;
    withdraw(amount: number): void;
    transfer(targetAccount: AccountInterface, amount: number): void;
}

export interface CheckingAccountInterface extends AccountInterface {
    overdraftLimit: number;
}

export interface SavingsAccountInterface extends AccountInterface {
    interestRate: number;
}
