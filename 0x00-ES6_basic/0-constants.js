export function taskFirst() {
    const task = 'I prefer const when I cam.';
    return task;
}

export function getLast() {
    return ' is okay';
}

export function getNext() {
    let combination = 'But sometimes let';
    combination += getLast();

    return combination;
}
