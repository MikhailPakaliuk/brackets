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
 }  
 
 return result;
}
