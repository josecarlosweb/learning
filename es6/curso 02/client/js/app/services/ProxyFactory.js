class ProxyFactory {
    static create(object, props, action){
        return new Proxy(object, {

            get(target, prop, receiver){
                if(props.includes(prop) && ProxyFactory._isAFunction(target[prop])){
                    return function(){
                        console.log(`Intercepting ${prop}`);
                        let call = Reflect.apply(target[prop], target, arguments);
                        action(target)
                        return call;
                    }
                }
                return Reflect.get(target, prop, receiver);
            },

            set(target, prop, value, receiver){
                let call = Reflect.set(target, prop, value, receiver)
                if(props.includes(prop)) action(target)
                return call;
            }

        });
    }

    static _isAFunction(prop){
        return typeof(prop) == typeof(Function)
    }
}