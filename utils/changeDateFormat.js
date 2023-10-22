

const changeDateFormat = (query) => {
    const dateData = new Date(query)
    return {
        date : dateData.getDate(),
        mont : dateData.getMonth(),
        year : dateData.getFullYear(),
        all : dateData.toDateString()
    }
}

console.log(changeDateFormat("2023-10-19T16:44:50.924+00:00"));
