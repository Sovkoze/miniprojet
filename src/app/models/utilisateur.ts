export class Utilisateur 
{

    constructor(public id: string, public username: string|any,
        public password: string|any,
        public firstName: string|any,
        public lastName: string|any,
        public role:string|any    )
    {}

}