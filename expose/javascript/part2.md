# Part 2

1. 3 is printed to console - i is a var so it still exists outside the for loop
   
2. 150 is printed to console - discountedPrice is var so still exists outside the for loop -> it's the value of 300 * .5 
   
3. 150 is printed to console - since 300 is even the rounded value is equal to discounted value and also equal 
   
4. [ 50, 100, 150 ] -> 50% off the input values returns all the discounted values
   
5. error - i is not defined outside of the for loop because it only exists within bounds because its a let
   
6. error - discountedPrice does not exisit outside the for loop - because its a let
   
7. 150 is printed to console - because it prints the last final price (50% of 300) - this is becaus final price was defined within scope of whole function not just for loop
   
8. [ 50, 100, 150 ] -> 50% off the input values returns all the discounted values
   
9.  error - i is only availbel inside the for loop bc its a const
10. 3 is printed to console - because it prints out the size of the input prices which is 3
    
11. [ 50, 100, 150 ] -> 50% off the input values returns all the discounted values
    
12. Answers below
    
    A. let sName = student.name;
    
    B. let gradYear = student['Grad Year'];
    
    C. student.greeting();
    
    D. let faveTeacher = student['Favorite Teacher'].name;
    
    E. let firstClass = student.courseLoad[0];
 
13. Answers below
    
    A. '32' - the '+' operator makes the int a string and concatenates them together
    
    B. 1 - the '-' operator makes the string convert to int so that numeric subtraction can occur
    
    C. 3 - null is equal to 0 when int so 3+0 = 3
    
    D. '3null' - since the 3 is a string the '+' operator makes null a string and concatenates them togther
    
    E. 4 - true when int is equal to 1 and 3+1 equals 4
    
    F. 0 - false equals 0 when int and 0+0 equals 0
    
    G. '3undefined' - since the 3 is a string the '+' operator makes undefined a string and concatenates them togther
    
    H. NaN - the '-' operator makes the string convert to int so that numeric subtraction can occur but since the second value is undefined the result is NaN
 
14. Answes below

    A. true - string 2 becomes number 2 to be compared to numeric 1 and it is true because 2 is bigger than 1
    
    B. false - 2 comes after 1 in hex value (comparing string alphapetic)
    
    C. true - because string 2 becomes number 2 when checked
    
    D. false - because different types
    
    E. false - true is equal to 1
    
    F. true - when converted to boolean 2 becomes true and true and true are the same type thus it is true

16. In file part2-question16.js

17. The array returned by the call made on line 13 is [ 2, 4, 6 ]. modifyArray takes in two paramaters, an original array and a function. The function iterates through the original array and applies to input function to each element. the input function in this case is doSomething which multiplies each number by 2. The modified element is pushed in a new array, and after each element is multiplied by two by doSomething the new array is returned. Therefore, in this case [ 1, 2, 3 ] becomes [ 2, 4, 6 ].

18. In file part2-question18.js

19. Output from code: 

    1
    
    4
    
    3
    
    2
