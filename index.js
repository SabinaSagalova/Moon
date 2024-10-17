// exercise 2
function addTodo() {
    let input = document.getElementById('todoInput');
    let task = input.value.trim();

    if (!task) {
        alert("You must type something");
        return;
    }

    let li = document.createElement('li');
    li.className = 'todo-item';
    li.innerHTML = `
        <span>${task}</span>
        <div>
            <button class="btn btn-sm btn-success me-2" onclick="toggleComplete(this)">✔</button>
            <button class="btn btn-sm btn-danger" onclick="deleteToDo(this)">✖</button>
        </div>`;

    document.getElementById('todoList').appendChild(li);
    input.value = ""; 
}
function toggleComplete(button) {
    button.closest('.todo-item').classList.toggle('completed');
}
function deleteToDo(button) {
    button.closest('.todo-item').remove();
}
document.getElementById('addButton').addEventListener('click', addTodo);

// exercise 3
function sortNumbers() {
    let input = document.getElementById("numbersInput").value;
    let numbers = input.split(' ').map(num => parseFloat(num.trim())); 
    let order = document.getElementById("order").value; 

    if (numbers.some(isNaN)) {
        document.getElementById("sorted").textContent = "Please enter numbers only :(";
        return;
    }
    numbers.sort((a, b) => {
        return order === "asc" ? a - b : b - a; 
    });
    document.getElementById("sorted").textContent = numbers.join(' ');
}

// exercise 4
function add() {
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("so").textContent = num1 + num2;
}

function subtract() {
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("so").textContent = num1 - num2;
}

function multiply() {
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("so").textContent = num1 * num2;
}

function divide() {
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("so").textContent = num1 / num2;
}
function modulus() {
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("so").textContent = num1 % num2;
}

function power() {
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("so").textContent = Math.pow(num1, num2);
}

// exercise 5
function calculateTax() {
    let price = parseFloat(document.getElementById("Price").value);
    let tax;

    if (price > 10000) {
        tax = price * 0.25;
    } else if (price >= 5000) {
        tax = price * 0.20;
    } else {
        tax = price * 0.15;
    }
    document.getElementById("taxAmount").textContent = `$${tax.toFixed(2)}`;
}
