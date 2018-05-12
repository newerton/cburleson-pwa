
**HTML**

``` html
<script src="https://unpkg.com/@reactivex/rxjs@5.3.0/dist/global/Rx.js"></script>
 
<button>Click me</button>
```

**JavaScript**

``` javascript
var button = document.querySelector('button');
 
Rx.Observable.fromEvent(button, 'click').
    subscribe(
        (value) => console.log(value.clientX) // just for example, log the x position of the cursor
    );
```

**JavaScript - Line 3**

The observable is created by the operator, fromEvent, which takes an “element” and an event name as parameters. It will listens for events of that name (i.e. 'click') taking place on that element. It returns an Observable that emits those events. An “element” may be a simple DOM element, or a NodeList, jQuery element, Zepto Element, Angular element, Ember.js element, or EventEmitter.

This operator also takes an optional third parameter: a function that accepts the arguments from the event handler as parameters and returns an item to be emitted by the resulting Observable in place of the event.

## Alternative importing

If you're using a JavaScript modules approach (such as with TypeScript),  you could do something like the following instead of using the `<script>` element for importing as shown above.

``` javascript
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/switchMap';
// etc., etc...
 
 
// or, you could just more conventiently grab the whole package, but this may not be efficient without Tree Shaking, so I'd recommend the approach above
// import 'rxjs/Rx';
```

## Creating your own observer

Alternatively, you could create your on observer to listen to the click event. Since RxJS provides the fromEvent operator, this is unnecessary. However, showing how this could be done provides a good example of how to create your own observers without use of the RxJS operators.

``` javascript
var button = document.querySelector('button');
 
var observer = {
    next: function(value) {
        console.log(value.clientX);
    }
    // In reality, the error and complete functions below would never be
    // called for a button click event, but this shows the basic structure
    // of an Observable; generally implementing the three functions: next, error, and complete...
    error: function (error) {
        console.log(error);
    }
    complete: function() {
        console.log('Completed');
    }
};

Rx.Observable.fromEvent(button, 'click').
    subscribe(observer);
```

## Creating Observables

There are several kinds of operators that can be used to create new Observables. 

- [Create](http://reactivex.io/documentation/operators/create.html)  — create an Observable from scratch by calling observer methods programmatically
`create` `createWithDisposable` `generate` `generateWithAbsoluteTime` `generateWithRelativeTime`
- [Defer](http://reactivex.io/documentation/operators/defer.html)  — do not create the Observable until the observer subscribes, and create a fresh Observable for each observer
`case` `defer` `if` `switchCase`
- [Empty/Never/Throw](http://reactivex.io/documentation/operators/empty-never-throw.html)  — create Observables that have very precise and limited behavior
`empty` `never` `throw`
- [From](http://reactivex.io/documentation/operators/from.html)  — convert some other object or data structure into an Observable
from fromCallback fromEvent fromEventPattern fromNodeCallback fromPromise of ofArrayChanges ofObjectChanges ofWithScheduler pairs
- [Interval](http://reactivex.io/documentation/operators/interval.html)  — create an Observable that emits a sequence of integers spaced by a particular time interval
`interval`
- [Just](http://reactivex.io/documentation/operators/just.html)  — convert an object or a set of objects into an Observable that emits that or those objects
`just` `return`
- [Range](http://reactivex.io/documentation/operators/range.html)  — create an Observable that emits a range of sequential integers
`range`
- [Repeat](http://reactivex.io/documentation/operators/repeat.html)  — create an Observable that emits a particular item or sequence of items repeatedly
`doWhile` `repeat` `while`
- [Start](http://reactivex.io/documentation/operators/start.html)  — create an Observable that emits the return value of a function
`start` `startAsync` `toAsync`
- [Timer](http://reactivex.io/documentation/operators/timer.html)  — create an Observable that emits a single item after a given delay
`timer`

## References

- https://youtu.be/Tux1nhBPl_w

