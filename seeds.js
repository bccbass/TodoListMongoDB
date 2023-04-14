const mongoose = require('mongoose');
const Task = require('./models/task')

mongoose.connect('mongodb://localhost:27017/todoList', { useNewUrlParser: true })
    .then(() => {
        console.log('Mongo Connection Open!')
    })
    .catch(err => {
        console.log('Oh No! Mongo error!', err)
    });

// const tasks = [
//     {
//         task: 'Trim Teds Nails',
//         due: today,
//         urgent: true
//     },
//     {
//         task: 'Roast Coffee',
//     },
//     {
//         task: 'fix Logic Latency',
//         due: 'Tuesday'
//     }
// ];
// const tasks = [
//     { task: 'Call Mechanic', due: 'Today' },
//     { task: 'Arrange Teds DIET at PEQ', due: 'Friday' }
// ]


//Update first seed array that didn't have isComplete
// Task.updateMany(({}), { isComplete: false })
//     .then(res => console.log(res))
//     .catch(e => console.log(e));


//insert objects:
// Task.insertMany(tasks)
//     .then(res => console.log(res))
//     .catch(e => console.log(e));
