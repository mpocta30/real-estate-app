#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Apr 21 11:19:03 2021

@author: nationaldrew2
"""

def rothira_calculator(age, retirementAge=65, currentBalance=0,
                       yearlyCont=0, invReturn=0):
    contributionYears = retirementAge - age;
    
    value_at_retirement = currentBalance * (invReturn ** contributionYears);
    
    while contributionYears > 0:
        contributionYears -= 1;
        value_at_retirement += yearlyCont * (invReturn ** contributionYears) * (invReturn);
    
    return value_at_retirement;


currentAge = int(input("Current Age: "))
retireAge = int(input("Retirement Age: "))
curBalance = float(input("Current IRA Balance: "))
contributions = float(input("Yearly Contributions: "))
investmentReturn = float(input("Investment Return: "))

futureBalance = rothira_calculator(currentAge,retireAge,curBalance,contributions,investmentReturn)

print("Value at Retirement: {}".format(futureBalance))