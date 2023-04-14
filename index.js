const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const path = require('path');

const Task = require('./models/task');

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/todoList', { useNewUrlParser: true })
    .then(() => {
        console.log('Mongo Connection Open!')
    })
    .catch(err => {
        console.log('Oh No! Mongo error!', err)
    });


app.get('/todo', async (req, res) => {

    const tasks = await Task.find({});
    const tasksTodo = tasks.filter(t => (!t.isComplete && !t.isUrgent))
    const completedTasks = tasks.filter(t => t.isComplete)
    const urgentTasks = tasks.filter(t => (!t.isComplete && t.isUrgent))
    res.render('todo/index', { tasksTodo, completedTasks, urgentTasks })
});

app.post('/todo', async (req, res) => {
    const newTask = new Task(req.body);
    await newTask.save()
    // .catch(e => console.log(e));
    res.redirect('/todo')
})

app.patch('/todo/:id', (req, res) => {
    const { id } = req.params;
    const markComplete = Task.findByIdAndUpdate(id, { isComplete: true }, { new: true })
        // .then(res => console.log(res))
        .catch(e => console.log(e));
    res.redirect('/todo')
})


app.delete('/todo/:id', async (req, res) => {
    const { id } = req.params;
    const deleteTask = await Task.findByIdAndDelete(id);
    res.redirect('/todo')
})

app.listen(3000, () => {
    console.log('todo list from port 3000')
})