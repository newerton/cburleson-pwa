Return items with recorded date less than given date

``` sparql
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX web: <http://base22.com/ont/web#>
 
SELECT * WHERE {
    ?subject dcterms:title ?title.
    ?subject dcterms:abstract ?abstract.
    ?subject web:publishDate ?publishDate.
    FILTER (?publishDate < "2016-09-28T19:19:02.982Z"^^xsd:dateTime)
}
```
