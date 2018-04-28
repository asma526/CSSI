sandwich = [["rye", "sourdough", "baguette"],
            [["ham", "salami", "turkey"],
             ["swiss", "munster", "cheddar"]],
            ["mayo", "mustard", "tabasco"]]
print sandwich[0][1]
print sandwich[1]
print sandwich[1][0][0]

print sandwich[2]
print sandwich[1][1][2]
print sandwich[0][1]

city_info = {'new_york' : { 'mayor' : "Bill DeBlasio",
                            'population' : 8406000,
                            'website' : "http://www.nyc.gov"
                            },
             'los_angeles' : { 'mayor' : "Eric Garcetti",
                            'population' : 3884307,
                            'website' : "http://www.lacity.org"
                            },
             'miami' : { 'mayor' : "Tomas Regalado",
                            'population' : 417650,
                            'website' : "http://www.miamigov.com"
                            },
             'chicago' : { 'mayor' : "Rahm Emanuel",
                            'population' : 2719000,
                            'website' : "http://www.cityofchicago.org/"
                            }
        }
print city_info["los_angeles"]
print city_info["chicago"]["mayor"]
print city_info["new_york"]["population"]
print city_info["miami"]["website"]
print city_info["los_angeles"]["mayor"]
print city_info["chicago"]


for city in city_info:
    for info in city_info[city]:
        print "The " + info + " of " + city + " is " + str(city_info[city][info])
