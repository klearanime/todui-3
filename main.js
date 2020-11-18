const readline = require('readline');
const data = require('./data.js');


const todos = data.todos;

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const menu = `
Your options are:

1. Add a todo.
2. Remove a todo.
3. Remove all completed todos.
4. Toggle a todo's completion status.
5. Toggle a todo's priority.
6. Quit.

`;

const add = function(userInput) {
  const todo = {
    text: userInput,
    isComplete: false,
    priority: 2,
  }

  todos.unshift(todo);
  console.clear();
  console.log('Your todos are:')
  for (const todo of todos) {
    console.log('* ' + todo.text);
  }

  interface.question(menu, handleMenu);
}

const handleMenu = function(cmd) {
  if (cmd === '1') {
    console.clear();
    interface.question('What todo would you like to add?\n\n', add);
  } else if (cmd === '2') {
    console.clear();
    numberedList()
    interface.question('\nWhich todo do you want to remove?\n', remove)
  } else if (cmd === '3') {
    console.clear();
    console.log(`Feature ${cmd} is still under construction. Sorry!`);
    interface.question(menu, handleMenu);
  } else if (cmd === '4') {
    console.clear();
    console.log(`Feature ${cmd} is still under construction. Sorry!`);
    interface.question(menu, handleMenu);
  } else if (cmd === '5') {
    console.clear();
    console.log(`Feature ${cmd} is still under construction. Sorry!`);
    interface.question(menu, handleMenu);
  } else {
    console.log('Quitting!');
    interface.close();
  }
};

console.clear();
console.log('Your todos are:')


const numberedList = function() {
for (let i = 0; i < todos.length; i++) {
  let toDo = ''
  const singleToDo = todos[i]
  const text = singleToDo.text
  const num = i + 1
toDo = toDo + num + ' --- ' + text
console.log(toDo)
  }
}
numberedList()


const remove = function(num) {
  todos.splice(num - 1, 1)
  numberedList()
  add()
    // if (cmd === '1') {
    //     interface.question('\nList your tasks', add)
    // } else if (cmd === '2') {
    //     displayToDos(todos);
    //     interface.question('\nRemove a task', remove)
    // } else if (cmd === '3') {
    //     displaysToDos(todos);
    //     interface.question('\nMark complete', complete)
    // } 
}


interface.question(menu, handleMenu)


// * Now all we have to do is `splice` the item at that location in the array. What you want to research for this one is how to use `splice` to remove one item only at a certain index. And remember! They're not actually passing you an index... they're passing you a _number_, which means your 0-based counting will be off by 1.
// * Then, of course, we'll need to show the user their new todo list, with the todo they picked `splice`d right out. And display the menu again, looping them back to your menu-handling function.


