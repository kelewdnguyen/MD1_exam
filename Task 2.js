function insertNumberToArray ( arr, x, index) {

    let newArray = [];
    for (let i = 0; i < index; i++) {
        newArray.push(arr[i]);
    }

    newArray.push(x);

    for (let i = index; i < arr.length; i++) {
        newArray.push(arr[i]);
    }

    return newArray;
}
    let oArray = [ 1,2,3,4,5];
    let insertedArray = insertNumberToArray(oArray, 10, 2);

    console.log(insertedArray);
