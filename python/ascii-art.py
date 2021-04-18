letterWidth = int(input())
letterHeight = int(input())
textToDisplay = input()
asciiLetters = [None] * letterHeight

# gets letters as ASCII 
for i in range(letterHeight):
    asciiLetters[i] = input()

# display letters
for i in range(letterHeight):
    row = ""

    for char in textToDisplay:
        asciiChar = ord(char)
        if asciiChar >= 65 and asciiChar <= 90: # [A-Z]
            charValue = asciiChar - 65 #
        elif asciiChar >= 97 and asciiChar <= 122: # [a-z]
            charValue = asciiChar - 97
        else: # invalid char
            charValue = 26 # "?"

        startValue = letterWidth * charValue
        row += asciiLetters[i][startValue : startValue + letterWidth]

    print(row)
