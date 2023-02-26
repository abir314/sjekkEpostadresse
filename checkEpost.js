function checkEpost1(text) {
    text = text.trim();
    // if (text.includes(' ')) return false;
    // if (!text.includes('@')) return false;
    // let textArray = text.split('');
    // let indexOfAlpha = parseInt(text.indexOf('@'));
   

    // for (let i = indexOfAlpha-1; i>0; i--){
    //     if(textArray[i] == '.') {
    //         for (let j = indexOfAlpha+1; j<textArray.length; j++){
    //             if(textArray[j] == '.') return true;
                 
    //         }
    //         return false;

    //     }
        
    // }
    // return false;
    const pattern = /^[(\w)+]+\.?([(\w)+]+)?@[\w+]+\.[\w+]+$/i;
    return pattern.test(text);

    

}