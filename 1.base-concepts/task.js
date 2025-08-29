"use strict";

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = Number(percent);
  contribution = Number(contribution);
  amount = Number(amount);
  countMonths = Number(countMonths);

  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  }

  let creditAmount = amount - contribution;

  let monthlyPercent = percent / 100 / 12;

  let monthlyPayment = creditAmount * (monthlyPercent + (monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1)));

  let totalPayment = monthlyPayment * countMonths;
  
  return Number(totalPayment.toFixed(2));
}
