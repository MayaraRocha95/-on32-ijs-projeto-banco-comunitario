import { Router } from 'express';
import { ClientService } from '../services/clientService';

const clientRouter = Router();
const clientService = new ClientService();

clientRouter.post('/', (req, res) => {
    const { id, fullName, address, phoneNumber } = req.body;
    const client = clientService.createClient(id, fullName, address, phoneNumber);
    res.status(201).json(client);
});

clientRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    const client = clientService.getClientById(id);
    if (client) {
        res.status(200).json(client);
    } else {
        res.status(404).json({ message: 'Client not found' });
    }
});

export { clientRouter };
