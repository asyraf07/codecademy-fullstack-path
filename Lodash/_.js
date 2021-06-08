const _ = {
    
    clamp(number, lower, upper) {
        let lowerClampedValue = Math.max(number, lower);
        let clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },

    inRange(value, start, end) {
        if (end == null) {
            end = start;
            start = 0;
        } else if (start > end) {
            const temp = start;
            start = end;
            end = temp;
        }
        return value >= start && value < end;
    },

    words(string) {
        return string.split(' ');
    },

    pad(string, length) {
        if (length <= string.length) return string;
        let startPaddingLength = Math.floor((length-string.length)/2);
        let endPaddingLength = length-string.length-startPaddingLength;
        let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
        return paddedString;
    },

    has(object, key) {
        const hasValue = object[key] !== undefined;
        return hasValue;
    },

    invert(object) {
        let invertedObject = {};
        for (key in object) {
            let originalValue = object[key];
            invertedObject[originalValue] = key;
        }
        return invertedObject;
    },

    findKey(object, predicate) {
        for (key in object) {
            let value = object[key];
            let predicateReturnValue = predicate(value);
            if (predicateReturnValue) return key;
        }
        return undefined;
    },

    drop(array, n=1) {
        let droppedArray = array.slice(n);
        return droppedArray;
    },

    dropWhile(array, predicate) {
        let dropNumber = array.findIndex((element, index) => !predicate(element,index,array));
        let droppedArray = this.drop(array, dropNumber);
        return droppedArray;
    },

    chunk(array, size=1) {
        let arrayChunks = [];
        for (let i = 0; i < array.length; i+=size) {
            let arrayChunk = array.slice(i,i+size);
            arrayChunks.push(arrayChunk);
        }
        return arrayChunks;
    }

};


// Do not write or modify code below this line.
module.exports = _;