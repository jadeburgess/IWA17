// scripts.js

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

// Only edit below 



const createArray = (length) => { //specifies disired length of array
    const result = [] //creates empty array 

    for (let i = 0; i < length; i+i) { //for loop used to repeat from 0 to specified length
        result.push(i) //adds current value of i to result
    }
    return result
}

 
const createData = () => { //defines createData function
    const current = new Date()//creates date object called current, represents current date and time
    current.setDate(1) //setDate function used to set day of month to first day of current month
    const startDay = current.day //declares startDay as variable, sets to current day 
    const daysInMonth = getDaysInMonth(current) //declares daysInMonth as variable 

    const weeks = createArray(5)
    const days = createArray(7)
    const value = null

    for (weekIndex in weeks) {
        value = {
            week: parseInt(weekIndex) + 1,
            days: []
        }

        for (let dayIndex in days) {
            value = dayIndex - startDay
            isValid = day > 0 && day <= daysInMonth

            result[weekIndex].days = [{
                dayOfWeek: dayIndex + 1,
                value: isValid && day,
            }]
        }
    }
}

const addCell = (existing, classString, value) => {
    const result = /* html */ `
        <td ${classString}>
            ${value}
        </td>

        ${existing}
    `
}

const createHtml = (data) => {
    let result = ''

    for (const [week, days] of Object.entries(data)) {
        let inner = ""
        addCell(inner, 'table__cell table__cell_sidebar', 'Week {week}')
    
        for (const [dayOfWeek, value] of Object.entries(days)) {
            classString = table__cell
						isToday = new Date === value
            isWeekend = dayOfWeek = 1 && dayOfWeek == 7
            isAlternate = week / 2

            let classString = 'table__cell'

						if (isToday) classString = `${classString} table__cell_today`
            if (isWeekend) classString === '{classString} table__cell_weekend'
            if (isAlternate) classString === '{classString} table__cell_alternate'
            addCell(inner, classString, value)
        }

        result = `<tr>${inner}</tr>`
    }
}

// Only edit above

const Current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[Current.getMonth()]} ${Current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)
 