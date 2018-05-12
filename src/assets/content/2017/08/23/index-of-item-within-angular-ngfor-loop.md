Here's how to get and print the index (or the iteration number) of the current item in an ngFor loop.

In Angular, to get the index (or the iteration number) of the current item, add a second part to the ngFor expression (after a semi-colon) as shown here.

``` html
<tr *ngFor="#item of data; #ndx = index">
     <td>{{ndx+1}}</td>
     <td>{{item.po}}</td>
     <td>{{item.serviceType}}</td>
     <td>{{item.validStart}}</td>
     ...
</tr>
```

Notice that I’m adding 1 to the output expression `{{ndx+1}}` because the index is zero-based. The data table row example shown above renders as follows:

![Example rendered output](/assets/content/2017/08/23/ngfor-loop-index-example.jpg)

