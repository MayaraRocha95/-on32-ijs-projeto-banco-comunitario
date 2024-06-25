import { ClientInterface } from '../interfaces/clientInterface';

export class Client implements ClientInterface {
    id: string;
    fullName: string;
    address: string;
    phoneNumber: string;

    constructor(id: string, fullName: string, address: string, phoneNumber: string) {
        this.id = id;
        this.fullName = fullName;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }
}
