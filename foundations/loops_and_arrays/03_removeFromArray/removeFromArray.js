const removeFromArray = function(array, ...toRemove) {
    let index;

    for (const remove of toRemove) {
        do {
            index = array.indexOf(remove)
            if (index !== -1) {
                array.splice(index, 1)
            }
        } while (index !== -1)
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
