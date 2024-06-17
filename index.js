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
    return arr.map(elem => createEmployeeRecord(elem))
}

// let twoRows = [
//     ["moe", "sizlak", "barkeep", 2],
//     ["bartholomew", "simpson", "scamp", 3]
//   ]

// createEmployeeRecords(twoRows)

const createTimeInEvent = (obj, dateStr) => {
    obj.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(dateStr.slice(11)),
        date: dateStr.slice(0, 10)
    })
    return obj
}

// let bpRecord = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3])
// createTimeInEvent(bpRecord, "2014-02-28 1400")

const createTimeOutEvent = (obj, dateStr) => {
    obj.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(dateStr.slice(11)),
        date: dateStr.slice(0, 10)
    })
    return obj
}

