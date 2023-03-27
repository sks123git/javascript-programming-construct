const startDate = new Date('2022-03-20').getTime();
const endDate = new Date('2022-06-20').getTime();
let newDate = new Date('2022-03-15').getTime();
if (newDate > startDate && newDate < endDate) console.log(true);
else console.log(false);
