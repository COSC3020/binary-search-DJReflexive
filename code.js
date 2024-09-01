
function binarySearch(list, element) {
    let finalIndex = 0;

    while (list[list.length - 1] >= list[0]) {
        let index = Math.floor(list.length / 2);

        // finds lowest index of any duplicates, returns lowest index
        for (var i = index; list[index - 1] == list[index]; i--) {
            index -= 1;
        }


        // if list[index] is the element, return finalIndex + index
        if (list[index] == element) return finalIndex + index;

        // parse left
        if (list[index] > element) {
            list = list.slice(0, index);
        }
        // parse right
        else {
            finalIndex += (index + 1);
            list = list.slice(index + 1, list.length);
        }
    
    }

    return -1;
}



// Extra Debugging Tests:


// let exampleEven = [0, 1, 2, 3, 4, 5]
// let exampleOdd = [0, 1, 2, 3, 4, 5, 6]
// let exampleUnsorted = [5, 1, 2, 4, 3, 0]
// let exampleLarge = [25989581395, 25989581399, 259895813950]
// let exampleNegative = [-10, -5, 0, 5, 10]
// let exampleDuplicates = [5, 5, 5, 5]


// console.log("exampleEven")
// for (i in exampleEven) {
//     try{ console.log("pass: " + binarySearch(exampleEven, exampleEven[i])) }
//     catch { console.log("exampleEven failed"); break; }
// }

// console.log("\n\nexampleOdd")
// for (i in exampleOdd) {
//     try{ console.log("pass: " + binarySearch(exampleOdd, exampleOdd[i])) }
//     catch { console.log("exampleOdd failed"); break; }
// }

// console.log("\n\nexampleUnsorted")
// for (i in exampleUnsorted) {
//     try{ console.log("pass: " + binarySearch(exampleUnsorted, exampleUnsorted[i])) }
//     catch { console.log("exampleUnsorted failed"); break; }
// }

// console.log("\n\nexampleLarge")
// for (i in exampleLarge) {
//     try{ console.log("pass: " + binarySearch(exampleLarge, exampleLarge[i])) }
//     catch { console.log("exampleLarge failed"); break; }
// }

// console.log("\n\nexampleNegative")
// for (i in exampleNegative) {
//     try{ console.log("pass: " + binarySearch(exampleNegative, exampleNegative[i])) }
//     catch { console.log("exampleNegative failed"); break; }
// }

// console.log("\n\nexampleDuplicates")
// for (i in exampleDuplicates) {
//     try{ console.log("pass: " + binarySearch(exampleDuplicates, exampleDuplicates[i])) }
//     catch { console.log("exampleDuplicates failed"); break; }
// }
