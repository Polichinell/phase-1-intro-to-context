const createEmployeeRecord = (employee) => {
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}

const createEmployeeRecords = (employees) => {
    const employeeArr = [ ];
    employees.map((employee) => {
        employeeArr.push(createEmployeeRecord(employee));
    })
return employeeArr;

}


const createTimeInEvent = (dateFull) => {
    let hourNum = parseInt(dateFull.slice(11), 10);
    let dateStr = dateFull.slice(0,10);

    let timeInObj = {
        type: "TimeIn",
        hour: hourNum,
        date: dateStr,
    }

   
    this.timeInEvents.push(timeInObj);

    return this;
}

const createTimeOutEvent = (dateFull) => {
    let hourNum = parseInt(dateFull.slice(11), 10);
    let dateStr = dateFull.slice(0,10);

    let timeOutObj = {
        type: "TimeOut",
        hour: hourNum,
        date: dateStr,
    }

   
    this.timeOutEvents.push(timeOutObj);

    return this;
    
}

const hoursWorkedOnDate = (dateWork) => {

    let timeIn = this.timeInEvents.find(e => e.date === dateWork)
    let timeOut = this.timeOutEvents.find(e => e.date === dateWork)
    return (timeOut.hour - timeIn.hour)/100
}

const wagesEarnedOnDate =(dateWage) => hoursWorkedOnDate.call(this, dateWage) * this.payPerHour

const findEmployeeByFirstName = (srcArray, firstName) => {

    for(let employee of srcArray){
        if(employee.firstName === firstName){
            return employee;
        }
    }

    return undefined;
}

function allWagesFor(employeeWage){

    let wageOnDate = 0;
    let totalWage = 0;

    for(let obj of employeeWage.timeInEvents) {
        wageOnDate = wagesEarnedOnDate(employeeWage, obj.date);
        totalWage += wageOnDate;
    }
    return totalWage;
}


const calculatePayroll = (employees) => {
let wageFull = 0;

for (let employee of employees) {
    wageFull += allWagesFor.call(employee);
}

return wageFull

}
