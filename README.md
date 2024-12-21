# Incorrect usage of $inc operator in MongoDB update operation
This example demonstrates an uncommon error in MongoDB where using a string instead of a number with the $inc operator can result in unexpected behavior.

## Bug
The `$inc` operator in MongoDB is designed to increment a numerical field.  Attempting to increment using a string value will not work as expected and may throw an error.

## Solution
The solution is simple; make sure to use a numerical value when incrementing using `$inc`.
