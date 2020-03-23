class NegotiationController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
        this._inputDate = $('#date');
        this._inputQuantity = $('#quantity');
        this._inputValue = $('#value');

        this._listNegotiations = new Bind(
            new ListNegotiations()
            , new NegotiationsView($('#negotiationsView'))
            , 'add', 'clear'
        );
        
        this._message = new Bind(
            new Message()
            , new MessageView($('#messageView'))
            , 'text'
        );
        
    }

    clearAll(){
        this._listNegotiations.clear();
        this._message.text = "List negotiations cleaned!"
    }
    
    add(event) {
        
        event.preventDefault();
        this._listNegotiations.add(this._createNegotiate());
        this._message.text = 'Negotiation added successful';
        
        this._cleanForm();   
    }
    
    _createNegotiate() {
        
        return new Negotiation(
            DateHelper.textForDate(this._inputDate.value),
            this._inputQuantity.value,
            this._inputValue.value);    
    }
    
    _cleanForm() {
     
        this._inputDate.value = '';
        this._inputQuantity.value = 1;
        this._inputValue.value = 0.0;
        this._inputDate.focus();   
    }
}