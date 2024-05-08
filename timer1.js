// imput from the terminal (example): node timer1.js 1, 3, 6, 8, 11
const alarmTimes = process.argv.slice(2);
// process.argv take the input from the terminal and returns array 
// with ***"STRING"!!!*** values

for (let num of alarmTimes) {
    time = parseInt(num) * 1000
    // convert string num to integer and change to ms
    setTimeout(() => {
    console.log(`beep it's been: ${num} second(s)`), 
    process.stdout.write("\x07");
    }, (time));
}








