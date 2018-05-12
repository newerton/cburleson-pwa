In Angular, to format a currency, use the currency pipe on a number as shown here.

``` javascript
<tr *ngFor="#item of data">
     <td><a href="#">{{item.invoiceNo}}</a></td>
     <td>{{item.invoiceDate}}</td>
     <td>{{item.invoiceStatus}}</td>
     <td class="right aligned">{{item.invoiceTotal | currency:'USD':true:'1.2-2'}}</td>
</tr>
```

- The first parameter, 'USD', of the pipe is an ISO currency code (e.g. 'US','EUR', etc.)
- The second parameter, true, is an optional boolean to specify whether or not you want to render the currency symbol ('$', '€'); default is false
- The third parameter,'1.2-2', also optional, specifies how to format the number, using the same formatting rules as apply to the number pipe.

Note, however, that the currency pipe relies on the Internationalization API, which is not available in all browsers. See current browser support for Internationalization API.

Here’s a visual example of what the example shown above renders when used on a decimal number:

![Rendered example](/assets/content/2016/04/29/angular-format-currency-example.jpg "Rendered example")
