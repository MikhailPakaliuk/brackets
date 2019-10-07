module.exports = function check(str, bracketsConfig) {
 let result = true;
    
 if(str.length%2!=0){
 result = false;
 }  
    
 return result;
}
