let employees = [];


function addEmployee(){

    let name = document.getElementById("name").value.trim();
    let id = document.getElementById("empid").value.trim();
    let branch = document.getElementById("branch").value.trim();
    let salary = parseFloat(document.getElementById("salary").value);

    if(name === "" || id === "" || branch === "" || isNaN(salary)){
        alert("Please fill all fields!");
        return;
    }

    employees.push({name, id, branch, salary});

    alert("Employee Added!");

    // clear inputs
    document.getElementById("name").value = "";
    document.getElementById("empid").value = "";
    document.getElementById("branch").value = "";
    document.getElementById("salary").value = "";
}

function showAll(){

    let container = document.getElementById("display");
    container.innerHTML = "";

    if(employees.length === 0){
        container.innerHTML = "No employees added";
        return;
    }

    employees.forEach(emp => {

        let div = document.createElement("div");
        div.className = "card";

        div.innerHTML =
            "<b>Name:</b> " + emp.name + "<br>" +
            "<b>ID:</b> " + emp.id + "<br>" +
            "<b>Branch:</b> " + emp.branch + "<br>" +
            "<b>Salary:</b> " + emp.salary;

        container.appendChild(div);
    });
}

// Net Salary
function netsalary(){
    if(employees.length === 0){
        showResult("No employees added");
        return;
    }

    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    showResult("Net Salary = " + total);
}

// Salary > 50000
function salaryabove50(){

    let filtered = employees.filter(emp => emp.salary > 50000);

    if(filtered.length === 0){
        showResult("No employee has salary > 50000");
        return;
    }

    let text = "Employees with salary > 50000:\n";

    filtered.forEach(emp => {
        text += emp.name + " : " + emp.salary + "\n";
    });

    showResult(text);
}

// Average Salary
function averagesalary(){

    if(employees.length === 0){
        showResult("No employees added");
        return;
    }

    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    let avg = (total / employees.length).toFixed(2);

    showResult("Average Salary = " + avg);
}

 
function countdepartment(){

    if(employees.length === 0){
        showResult("No employees added");
        return;
    }

    let dept = {};

    employees.forEach(emp => {
        dept[emp.branch] = (dept[emp.branch] || 0) + 1;
    });

    let text = "Department Count:\n";

    for(let d in dept){
        text += d + " : " + dept[d] + "\n";
    }

    showResult(text);
}


function showResult(msg){
    document.getElementById("result").innerText = msg;
}