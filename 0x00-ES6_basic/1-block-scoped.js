export default function taskBlock(trueOrFalse) {
    task = false;
    task2 = true;

    if (trueOrFalse) {
        var task = true;
        var task2 = false;
    }

    return [task, task2];
}
