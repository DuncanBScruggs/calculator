## Pseudo Code for Classic Calculator

Pseudocode for Classic Calculator

!NO EVAL

MVC

## View
    Bootstrap to show calculator buttons and text field
    Container
    Row
    text field col-12
    16 col-3 for c to +
    Col-6 for 0
    2 col-3 for . and =
    Two states for C and AC
    Check if decimal has been used and disallow if it has
    -  array to hold all symbols. Use to assign ids and icon
        - [ C, +-, %, ...]

## Model
    Numarr [] = [0] holds all the inputs
    Maybe arr for operators

## Controller
    Inputs pushed Numarr[ ] 
    Have eventlisteners to see what operator was selected then send to that logic
    [ 2, 2]
    Arr[0] += Arr[0] + arr[arr.length-1]
    Arr[0] += Arr[0]  / arr[arr.length-1]
