class Employer {

    constructor(email) {
        this._email = email;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }
}

let employer = new Proxy(new Employer('abc@abc.com'), {
    set(target, prop, value, receiver){
        console.log(`The old value of property ${prop} is ${target.email} and the new value is ${value}`);
        return Reflect.get(target, prop, receiver)
    }
});
employer.email = 'ccarvalho@alu.ufc.br'