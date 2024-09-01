
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
