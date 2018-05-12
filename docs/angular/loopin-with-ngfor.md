# Looping with ngFor

```
data = [
  {
    name: 'Cody',
    online: true
  },
  {
    name: 'John',
    online: false
  },
  {
    name: 'Mary',
    online: true
  }
]
```

```
<tr *ngFor="let record of records">
  <td>{{record.name}}</td>
  <td>{{record.online}}</td>
</tr>
```

```
<tr *ngFor="let record of records; let myIndex = index">
  <td>{{myIndex + 1}}
  <td>{{record.name}}</td>
  <td>{{record.online}}</td>
</tr>
```

# Even / odd records

```
<tr *ngFor="let record of records; let myIndex = index; let evenRecords = even; let oddRecords = odd" [ngClass]="{odd: oddRecord, even: evenRecord}">
  <td>{{myIndex + 1}}
  <td>{{record.name}}</td>
  <td>{{record.online}}</td>
</tr>
```

```
tr.even {
  background: black;
  color:white;
}

tr.odd {
  background: red;
  color: white;
}
```

# First and last record

```
<tr *ngFor="let record of records; let myIndex = index; let evenRecords = even; let oddRecords = odd" [ngClass]="{odd: oddRecord, even: evenRecord, first: firstRecord, last: lastRecord}">
  <td>{{myIndex + 1}}
  <td>{{record.name}}</td>
  <td>{{record.online}}</td>
</tr>
```

This puts 'first' in the first element's css attribute and 'last' in the last element.
