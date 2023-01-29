var weekday = new Date().toLocaleDateString("en-US" ,{weekday:"long"} );
console.log(weekday)
if (weekday === "Monday") {
    console.log(`Let's start the week!`)
} else if (weekday === "Tuesday") {
    console.log(`Worky Work`);
} else if (weekday === "Wednesday") {
    console.log(`Supermarket`);
} else if (weekday === "Thursday") {
    console.log(`Exam`);
} else if (weekday === "Friday") {
    console.log(`Nearly Weekend`);
} else if (weekday === "Saturday") {
    console.log(`Yay Hoo`);
} else{
    console.log(`Oh No`);
}