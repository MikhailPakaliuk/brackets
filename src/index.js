module.exports = function check(str, bracketsConfig) {
    function constructorRE(arr, j) {
        return (arr[j][0] == '(' || arr[j][0] == '{' || arr[j][0] == '[' || arr[j][0] == '|')
            ? "\\" + arr[j][0] + "\\" + arr[j][1]
            : arr[j][0] + arr[j][1];
    }

    let result = true;
    if (str.length % 2 != 0) {
        return false;
    }

    let str_brackets = '';
    let str_buf = '';
    do {
        str_buf = str;
        for (let i = 0; i < bracketsConfig.length; i++) {
            let re = new RegExp(constructorRE(bracketsConfig, i), 'gi');
            do {
                str_brackets = str;
                str = str.replace(re, '');
            } while (str_brackets !== str);
        }
    } while (str_buf !== str);

    return str.length == 0;
}
