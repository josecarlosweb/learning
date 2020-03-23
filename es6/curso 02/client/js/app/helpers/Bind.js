class Bind {
    constructor(model, view, ...props){
        let proxy = ProxyFactory.create(
            model
            , props
            , modelFromAction => view.update(modelFromAction));
        view.update(model);
        return proxy 
    }
    
}