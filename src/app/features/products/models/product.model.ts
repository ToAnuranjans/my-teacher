import { Address } from './address.model';

export class Product {
    constructor(
        public code: string = '',
        public name: string = '',
        public price: number = null,
        public quantity: number = null,
        public showAddresses: boolean = true,
        public addresses: Address[] = [
            new Address(null, null, 'Surajpur','Mau')
        ]
    ) { }
}

