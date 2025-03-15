def sip_calculator(monthly_investment, annual_rate, years):
    """
    Calculate the future value of SIP investments.
    :param monthly_investment: Monthly investment amount
    :param annual_rate: Annual rate of return (in percentage)
    :param years: Investment duration in years
    :return: Future value of the SIP investment
    """
    months = years * 12
    monthly_rate = annual_rate / 12 / 100  # Convert annual rate to monthly rate
    future_value = monthly_investment * (((1 + monthly_rate) ** months - 1) / monthly_rate) * (1 + monthly_rate)
    return round(future_value, 2)


# Example usage
monthly_investment = float(input("Enter monthly investment amount: "))
annual_rate = float(input("Enter annual rate of return (%): "))
years = int(input("Enter investment duration (in years): "))

future_value = sip_calculator(monthly_investment, annual_rate, years)
print(f"Future value of your SIP investment: ₹{future_value}")
