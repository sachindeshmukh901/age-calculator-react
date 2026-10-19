// Returns { years, months, days } between birthDate and today.
export function calculateAge(birthDate, today = new Date()) {
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += previousMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

export function formatSystemDate(today = new Date()) {
  return `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
}
