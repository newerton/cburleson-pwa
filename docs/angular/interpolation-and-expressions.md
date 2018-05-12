# Interpolation and expressions

In your component html (template), an interpolation is this:

`{{ }}`

The expression is the part in between, like this:

`{{ myvar }}`

You can do some, but not all JavaScript expressions in the interpolation block:

`{{ 5 + 2 }}`

You can also call a function that exists in the module:

`{{ doDomeHeavyTask() }}`

```
doSomeHeaveyTask() {
  //...
}
```


