def swp_calculator(initial_amount, monthly_withdrawal, annual_rate, years):
    """
    Calculate the remaining corpus after SWP withdrawals.
    :param initial_amount: Initial investment amount
    :param monthly_withdrawal: Monthly withdrawal amount
    :param annual_rate: Annual rate of return (in percentage)
    :param years: Duration of withdrawals (in years)
    :return: Remaining corpus after SWP
    """
    months = years * 12
    monthly_rate = annual_rate / 12 / 100  # Convert annual rate to monthly rate
    remaining_corpus = initial_amount

    for _ in range(months):
        remaining_corpus = remaining_corpus * (1 + monthly_rate) - monthly_withdrawal

    return round(remaining_corpus, 2) if remaining_corpus > 0 else 0


# Example usage
initial_amount = float(input("Enter initial investment amount: "))
monthly_withdrawal = float(input("Enter monthly withdrawal amount: "))
annual_rate = float(input("Enter annual rate of return (%): "))
years = int(input("Enter withdrawal duration (in years): "))

remaining_corpus = swp_calculator(initial_amount, monthly_withdrawal, annual_rate, years)
print(f"Remaining corpus after SWP: ₹{remaining_corpus}")
