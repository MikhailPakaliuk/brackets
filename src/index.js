module.exports = function check(str, bracketsConfig) {
    
    function couple(value,array){
        let result;
        for(let i=0;i<array.length;i++){
            if(array[i][0]==value){
                result = array[i][1];
            }
        }
    return result;
    }
    
 let result = true;
 let str_expectation_brackets='';
    
 if(str.length%2!=0){
    result = false;
 }else{
    str_expectation_brackets=couple(str[0],bracketsConfig)+str_expectation_brackets;
    if(str[1]==str_expectation_brackets[0]){
        str_expectation_brackets=str_expectation_brackets.substring(1);
    }else{
    
    }
 }
 
 return result;
}
