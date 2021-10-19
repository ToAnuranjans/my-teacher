/* eslint-disable @typescript-eslint/naming-convention */
export class User {
    constructor(
        public id: number,
        public email: string,
        public first_name: string,
        public last_name: string,
        public avatar: string
    ) { }
}
