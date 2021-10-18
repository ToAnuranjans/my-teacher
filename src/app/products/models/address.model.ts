
export class Address {
    constructor(
        public id: string = '',
        public type: AddressType = AddressType.home,
        public locality: string = '',
        public city: string = '',
        public pincode: string = '',
        public state: string = ''
    ) { }
}


export enum AddressType {
    home = 'Home',
    work = 'Work',
    other = 'Other'
}


