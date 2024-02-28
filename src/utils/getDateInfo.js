export const getDateInfo = () => {
  const currentDate = new Date();

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = currentDate.getDay();
  const month = currentDate.getMonth();
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();

  return {
    day: daysOfWeek[day],
    month: monthOfYear[month],
    date: date,
    year: year,
  };
};

// const date = getDateInfo();
// console.log(date);
