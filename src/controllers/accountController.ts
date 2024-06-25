import { Router } from 'express';
import { AccountService } from '../services/accountService';

const accountRouter = Router();
const accountService = new AccountService();

accountRouter.post('/checking', (req, res) => {
    const { accountNumber, balance, clientId, overdraftLimit } = req.body;
    const account = accountService.createCheckingAccount(accountNumber, balance, clientId, overdraftLimit);
    res.status(201).json(account);
});

accountRouter.post('/savings', (req, res) => {
    const { accountNumber, balance, clientId, interestRate } = req.body;
    const account = accountService.createSavingsAccount(accountNumber, balance, clientId, interestRate);
    res.status(201).json(account);
});

accountRouter.get('/:accountNumber', (req, res) => {
    const { accountNumber } = req.params;
    const account = accountService.getAccountByNumber(accountNumber);
    if (account) {
        res.status(200).json(account);
    } else {
        res.status(404).json({ message: 'Account not found' });
    }
});

export { accountRouter };
