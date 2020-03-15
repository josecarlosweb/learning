class DateHelper {
    
    constructor() {
        
        throw new Error('This class can not be instantiated');
    }
    
    static dateForText(date) {
        return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    }
    
    static textForDate(text) {
        
        if(!/\d{4}-\d{2}-\d{2}/.test(text)) 
            throw new Error('Must be in format aaaa-mm-dd');
             
        return new Date(...text.split('-').map((item, index) => item - index % 2));
    }
    
}