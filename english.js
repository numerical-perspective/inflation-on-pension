clear();

function pension(starting_salary, working_experience, salary_increase_per_year, inflation_rate) {
    const percent_of_salary_for_pension = 0.20;
    let salary = starting_salary;
    let total_pension_deposits = [];
    let total_inflation_on_pension = [];
    let inflation_on_pension_per_annum = [];
    let monthly_salary_per_year = [];

    for (let i = 1; i <= working_experience; i++) {
        salary = salary + (salary * salary_increase_per_year);
        monthly_salary_per_year.push(Math.floor(salary));

        let yearly_salary = Math.floor(salary * 12);
        let yearly_pension = Math.floor(yearly_salary * percent_of_salary_for_pension);
        total_pension_deposits.push(yearly_pension);

        inflation_on_pension_per_annum = total_pension_deposits.reduce((acc, item) => acc + item) * inflation_rate;
        total_inflation_on_pension.push(Math.floor(inflation_on_pension_per_annum));
    }

    let yearly_deposits_to_pension = total_pension_deposits;
    let yearly_inflation_on_pension = total_inflation_on_pension;
    total_pension_deposits = Math.floor(total_pension_deposits.reduce((acc, item) => acc + item));
    total_inflation_on_pension = Math.floor(total_inflation_on_pension.reduce((acc, item) => acc + item));


    return {
        total_pension_deposits,
        total_inflation_cost_on_pension: total_inflation_on_pension,
        total_inflation_on_pension: `${Math.floor(total_inflation_on_pension / total_pension_deposits * 100)}%`,
        monthly_salary_per_year,
        yearly_deposits_to_pension,
        yearly_inflation_on_pension
    }
}


pension(5000, 40, 0.01, 0.02);
