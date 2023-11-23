const removeFromArray = function(myArray, ...myNum) {
    const newArray = myArray.filter((item) => {
        return item != myNum
    })
    return newArray;
    };

// Do not edit below this line
module.exports = removeFromArray;
