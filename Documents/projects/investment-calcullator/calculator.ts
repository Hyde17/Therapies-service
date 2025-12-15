type Data = {
  initial_amount: number;
  annual_contribution: number;
  expected_return: number;
  duration: number;
};

type InvestmentResult = {
  year: string;
  total_amount: number;
  total_interest_earned: number;
  total_contributions: number;
};

let annualResults: Array<InvestmentResult> = [];

type CalculationResult = Array<InvestmentResult> | string;
function calculateInvestment(
  // p0: number,
  // p1: number,
  // p2: number,
  // p3: number,
  data: Data
): CalculationResult {
  const { initial_amount, annual_contribution, duration, expected_return } =
    data;
  if (initial_amount < 0) {
    return "Initial amount must be a minimum of 0!";
  }
  if (duration <= 0) {
    return "No valid number of years!";
  }
  if (expected_return < 0) {
    return "Expected return must be at lest Zero!";
  }

  let total = initial_amount;
  let total_contributions = 0;
  let total_interest_earned = 0;

  for (let i = 0; i < duration; i++) {
    total = total * (1 + expected_return);
    total_interest_earned = total - total_contributions - initial_amount;
    total_contributions = total_contributions + annual_contribution;
    total = total + annual_contribution;

    annualResults.push({
      year: `Year ${i + 1}`,
      total_amount: total,
      total_interest_earned,
      total_contributions,
    });
  }
  return annualResults;
}

function printResults(results: CalculationResult) {
  if (typeof results === "string") {
    console.log(results);
    return;
  }
  for (const yearEndResult of results) {
    console.log(yearEndResult.year);
    console.log(`Total: ${yearEndResult.total_amount.toFixed(0)}`);
    console.log(
      `Total Contributions: ${yearEndResult.total_contributions.toFixed(0)}`
    );
    console.log(
      `Total Interest Earned: ${yearEndResult.total_interest_earned.toFixed(0)}`
    );
    console.log("-----------------------");
  }
  //print (output) the result data
}

const investmentData: Data = {
  initial_amount: 1000,
  annual_contribution: 500,
  expected_return: 0.8,
  duration: 5,
};
const results = calculateInvestment(investmentData);
printResults(results);
