import numpy as np  


revenue = input("Please enter a the revenue: ")

rev = int(revenue)

percentage = 0.0

if rev > 8000:
    percentage = 0.02
elif rev > 7500:
    percentage = 0.015
elif rev > 7000:
    percentage = 0.01
else:
    percentage = 0.0
    
total_bonus = rev*percentage
print(total_bonus)
    
total_time = input("Please enter the total time worked by the workers: ")
tt = float(total_time)

bonus_per_hour = total_bonus/tt
print(bonus_per_hour)

workers = {
    'Gwa':'Janek Gwara',
    'Fig':'Ola Figuła',
    'Drw':'Dominika Drwal',
    'Kre':'Emilia Kręcioch',
    'Kun':'Izabela Kunc',
    'Wol':'Julia Wolf',
    'Mys':'Karolina Myśliwiec',
    'Szy':'Kasia Szymańska',
    'Ryl':'Marta Rylska',
    'Wil':'Natalia Wilk',
    'Gor':'Ola Gorazda',
    'Bub':'Patryk Bubak',
    'Zbo':'Piotr Zborowski',
    'Kal':'Ula Kalęba'
}

