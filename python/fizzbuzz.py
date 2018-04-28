def FizzBuzz(n):
    for i in range(0,n+1):
        if (i % 3) and (i % 5) == 0:
            print "fizzbuzz"
        elif i % 3 == 0:
            print "fizz"
        elif i % 3 == 0:
            print "buzz"
        else:
            print i

def FizzBuzzLoop():
    while True:
        n = int(raw_input("Pick a number: "))
        FizzBuzz(n)
        response = raw_input("Quit? ")
        if response == "quit":
            break
    print "goodbye"

FizzBuzzLoop()
