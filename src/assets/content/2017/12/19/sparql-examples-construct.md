Construct a graph giving ontology structure (the class hierarchy, properties, domains and ranges)

``` sparql
CONSTRUCT { ?s ?p ?o . } 
WHERE { 
     VALUES ?p { rdfs:subClassOf rdfs:subPropertyOf rdfs:domain rdfs:range} 
     ?s ?p ?o 
}
```

Note that when a reasoner is enabled classes may typically be inferred to be `rdfs:subClassOf` 
themselves and `rdfs:subClassOf` any parent class, not just the direct parent.

