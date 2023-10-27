const reverseString = function(myString) {
    stringSplit = myString.split("").reverse().join('');
    console.log(stringSplit);
    return stringSplit;
};

reverseString("Hello, World!");

// Do not edit below this line
module.exports = reverseString;
