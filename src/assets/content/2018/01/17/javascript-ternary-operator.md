The conditional (ternary) operator is the only JavaScript operator that takes three operands and it is frequently used as a shortcut for the if statement.

```javascript
// If isMember (first argument) evaluates to true, return "$2:00" (first expression),
// else return "$10.00" (second expression)
function getFee(isMember) {
  return (isMember ? "$2.00" : "$10.00");
}
 
 
// Another example
// var foo = (a === b) ? 1 : 2;
var foo = (a === b)
  ? 1
  : 2;
```

See also: [Conditional (ternary) Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator), MDN web docs
