# DevTools Part 2

1. What was the bug?
   - The bug was that the type of num1 and num2 when being added were strings resulting in a string concatenation instead of an arithmetic sum

2. How would you fix it?
   - To fix, on line 11 when num1 and num2 are being added, cast them to be integers (one way by using the function parseInt) so that they are added properly
