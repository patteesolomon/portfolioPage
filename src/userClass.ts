import { FC } from "react";

class User
{
    us: string;
    ps: string;
    email: string;
    //[s: string] : boolean | ((s: string) => boolean);
    constructor(us2: string) 
    {
        this.us = us2;
        this.ps = "";
        this.email = "";
    }
    get gUs(): string{
        return this.us;
    }
    set sUs(d: string){
        this.us = d;
    }
    // check(s: string)
    // {
    //     return this[s] as boolean;
    // }
}

function beatUp() 
{
    const emment = new User('herpos')
}

const nuser = beatUp;

