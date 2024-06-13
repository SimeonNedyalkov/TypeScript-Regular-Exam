function sum(startNumber, endNumber) {
    let all = '';
    for (let currentNumb = startNumber; currentNumb <= endNumber; currentNumb++) {
        if (currentNumb == endNumber) {
            all += currentNumb;
        }
        else {
            all += currentNumb + " ";
        }
    }
    let totalSum = 0;
    for (let i = startNumber; i <= endNumber; i++) {
        totalSum += i;
    }
    console.log(all);
    console.log(`Sum: ${totalSum}`);
}
sum(5, 10);
