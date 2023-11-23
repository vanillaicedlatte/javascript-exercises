const removeFromArray = function(myArray, ...myNum) {
    const newArray = myArray.filter((item) => {
        return !myNum.includes(item);
    });
    console.log(newArray);
    return newArray;
    };

// Do not edit below this line
module.exports = removeFromArray;
