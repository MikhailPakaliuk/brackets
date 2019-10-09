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
     for(let i=0;str.length>i;i++){
        let buffer_expectation_brackets=couple(str[i],bracketsConfig);
        if(buffer_expectation_brackets!=undefined){//still need to check str_expectation_brackets
            str_expectation_brackets=buffer_expectation_brackets+str_expectation_brackets;
        }else{
            result=false;
        } 
        if(str[i+1]==str_expectation_brackets[0]){
            str_expectation_brackets=str_expectation_brackets.substring(1);
            i+=1;
        }else{
            if(couple(str[i+1],bracketsConfig)!=undefined){
           
            }else{
                result=false;
            }
        }
     }
 }
 
 return result;
}
