# TypeScript Null or Undefined Error in String Interpolation

This repository demonstrates a common error in TypeScript: attempting to use a potentially null or undefined variable in string interpolation without proper null checks.  The bug is explained in detail, and a solution is provided.

## Bug

The `greet` function attempts to interpolate the `name` parameter directly into a string. If `name` is null or undefined, this will cause a runtime error.

## Solution

The solution involves adding a null check before performing the string interpolation.  This ensures that the code handles null or undefined values gracefully.