// Your code here
function createEmployeeRecord(arr){

    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arr){
    // return arr.map(elem => createEmployeeRecord(elem))

    return arr.map(function(row){
        return createEmployeeRecord(row)
    })
}

// let twoRows = [
//     ["moe", "sizlak", "barkeep", 2],
//     ["bartholomew", "simpson", "scamp", 3]
//   ]

// createEmployeeRecords(twoRows)

const createTimeInEvent = (obj, dateStr) => {
    let [date, hour] = dateStr.split(' ')

    obj.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date
    })
    return obj
}

// let bpRecord = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3])
// createTimeInEvent(bpRecord, "2014-02-28 1400")

const createTimeOutEvent = (obj, dateStr) => {
    let [date, hour] = dateStr.split(' ')

    obj.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date
    })
    return obj
}

const hoursWorkedOnDate = (obj, dateStr) => {
    // const timeIn = obj.timeInEvents.filter(event => event.date === dateStr)[0].hour
    // const timeOut = obj.timeOutEvents.filter(event => event.date === dateStr)[0].hour

    const inEvent = obj.timeInEvents.find((e) => e.date === dateStr)
    const outEvent = obj.timeOutEvents.find((e) => e.date === dateStr)
    
    return (outEvent.hour - inEvent.hour) / 100
}

// const cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 1000])
// createTimeInEvent(cRecord, "0044-03-15 0900")
// createTimeOutEvent(cRecord, "0044-03-15 1100")
// hoursWorkedOnDate(cRecord, "0044-03-15")

const wagesEarnedOnDate = (obj, dateStr) => {
    return hoursWorkedOnDate(obj, dateStr) * obj.payPerHour
}

const allWagesFor = (obj) => {
    const dates = obj.timeInEvents.map(event => event.date)
    
    return dates.reduce((acum, d) => acum + wagesEarnedOnDate(obj, d), 0)

    // let acum = 0
    // for(let i = 0; i < allWages.length; i++){
    //     acum += allWages[i]
    // }

    // return acum
}

const calculatePayroll = (arr) => {
    return arr.reduce((acum, rec) => acum + allWagesFor(rec), 0)

    // const payrollArr = arr.map(employee => allWagesFor(employee))

    // let acum = 0
    // for(let i = 0; i < payrollArr.length; i++){
    //     acum += payrollArr[i]
    // }

    // return acum
}