Example SPARQL queries that can help you list the classes in an ontology.

## List all classes

```
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  
SELECT DISTINCT ?type
WHERE {
  ?s a ?type.
}
```

Note: The SPARQL keyword `a` is a shortcut for the common predicate `rdf:type`, giving the class of a resource.

```
List root classes
SELECT ?directSub ?super
 WHERE { ?directSub rdfs:subClassOf ?super .
         FILTER NOT EXISTS {
            ?directSub rdfs:subClassOf ?otherSub .
            FILTER (?otherSub != ?directSub)
         }
 }
```

## List all classes with a given prefix

```
PREFIX bc: <http://base22.com/ont/bc#>
 
SELECT DISTINCT ?type
WHERE {
  ?subject a ?type.
  FILTER( STRSTARTS(STR(?type),str(bc:)) )
}
```

## List class hierarchy

```
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
 
 
SELECT DISTINCT ?subject ?label ?supertype
WHERE {
    { ?subject a owl:Class . } UNION { ?individual a ?subject . } .
    OPTIONAL { ?subject rdfs:subClassOf ?supertype } .
    OPTIONAL { ?subject rdfs:label ?label }
} ORDER BY ?subject
```

Note that when a reasoner is enabled classes may typically be inferred to be `rdfs:subClassOf` themselves and `rdfs:subClassOf` any parent class, not just the direct parent.

## List class hierarchy - filtered

Give a class hierarchy, but filter out several structural elements so that we only end up with the unique classes in our ontology.

```
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
SELECT DISTINCT ?subject ?label ?supertype
WHERE {
    { ?subject a owl:Class . } UNION { ?individual a ?subject . } .
    OPTIONAL { ?subject rdfs:subClassOf ?supertype } .
    OPTIONAL { ?subject rdfs:label ?label }.
    FILTER (?subject != owl:Class &&
        ?subject != rdf:List &&
        ?subject != rdf:Property &&
        ?subject != rdfs:Class &&
        ?subject != rdfs:Datatype &&
        ?subject != rdfs:ContainerMembershipProperty &&
        ?subject != owl:DatatypeProperty &&
        ?subject != owl:NamedIndividual &&
        ?subject != owl:Ontology )
} ORDER BY ?subject
```

Note that when a reasoner is enabled classes may typically be inferred to be `rdfs:subClassOf` themselves and `rdfs:subClassOf` any parent class, not just the direct parent.

## List class hierarchy with direct subclasses only

This is similar to the query above, but uses the Sesame-specific `sesame:directSubClassOf` to get only direct subclasses. This would work in any RDF4J (formerly Sesame) system such as Graph DB.

```
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX : <http://codyburleson.com/hyperg/>
 
SELECT DISTINCT ?subject ?label ?supertype
WHERE {
    {
        ?subject a owl:Class .
        OPTIONAL { ?subject sesame:directSubClassOf ?supertype } .
        OPTIONAL { ?subject rdfs:label ?label }.
    }
           
          FILTER (?subject != owl:Class &&
            ?subject != rdf:List &&
            ?subject != rdf:Property &&
            ?subject != rdfs:Class &&
            ?subject != rdfs:Datatype &&
            ?subject != rdfs:ContainerMembershipProperty &&
            ?subject != owl:DatatypeProperty &&
            ?subject != owl:NamedIndividual &&
            ?subject != owl:Ontology &&
            ?subject != ?supertype)
} ORDER BY ?subject
```
