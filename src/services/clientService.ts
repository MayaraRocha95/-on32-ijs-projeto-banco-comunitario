import { Client } from '../models/client';

export class ClientService {
    private clients: Client[] = [];

    createClient(id: string, fullName: string, address: string, phoneNumber: string): Client {
        const client = new Client(id, fullName, address, phoneNumber);
        this.clients.push(client);
        return client;
    }

    getClientById(id: string): Client | undefined {
        return this.clients.find(client => client.id === id);
    }
}
