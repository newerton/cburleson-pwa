**Contents**

- [Find all triples](/blog/sparql-examples-select#find-all-triples)
- [Find all same-subject triples by given subject](/blog/sparql-examples-select#find-all-same-subject-triples-by-given-subject)
- [Find and order most used predicates](/blog/sparql-examples-select#find-and-order-most-used-predicates)
- [Select the top 100 nodes in the RDF graph](/blog/sparql-examples-select#select-the-top-100-nodes-in-the-rdf-graph)
- [Find anything with a label](/blog/sparql-examples-select#find-anything-with-a-label)
- [Find instances by class with a label](/blog/sparql-examples-select#find-instances-by-class-with-a-label)
- [Find all subjects with a given object property](/blog/sparql-examples-select#find-all-subjects-with-a-given-object-property)
- [Use multiple triple patterns to retrieve multiple properties](/blog/sparql-examples-select#use-multiple-triple-patterns-to-retrieve-multiple-properties)
- [Find all classes](/blog/sparql-examples-select#find-all-classes)
- [Find all classes with a given prefix](/blog/sparql-examples-select#find-all-classes-with-a-given-prefix)
- [Query from a particular graph on the web](/blog/sparql-examples-select#query-from-a-particular-graph-on-the-web)
- [Find subjects with a property value greater than](/blog/sparql-examples-select#find-subjects-with-a-property-value-greater-than)

## Find all triples
Use `SELECT` to signify you want to select certain information and `WHERE` to signify your conditions, restrictions, and filters. A `limit` is used to avoid cracking the server on a large dataset.

``` sparql
SELECT ?subject ?predicate ?object
WHERE {?subject ?predicate ?object} 
LIMIT 100
```

## Find all same-subject triples by given subject

By specifying only the subject in the pattern, we can return all triples that have that subject. When an individual entity is defined by a given subject URI, then this is a way to get all the properties for that entity. 

``` sparql
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
SELECT ?subject ?predicate ?object
WHERE {
    <http://codyburleson.com/hyperg/person/cody-burleson> ?predicate ?object .
} LIMIT 100
```

Since the subject is known, it may typically only be necessary to return the `?predicate` and `?object` in the `SELECT` line (omitting `?subject`)

## Find and order most used predicates

``` sparql
SELECT ?predicate (COUNT(*)AS ?frequency)
WHERE {?subject ?predicate ?obDEject}
GROUP BY ?predicate
ORDER BY DESC(?frequency)
LIMIT 10
```

## Select the top 100 nodes in the RDF graph

RDF Rank is a GraphDB extension. It is similar to Page Rank and it identifies "important" nodes in an RDF graph based on their interconnectedness. It is accessed using the `rank:hasRDFRank` system predicate. 

``` sparql
PREFIX rank:<http://www.ontotext.com/owlim/RDFRank#>
SELECT ?n
WHERE {?n rank:hasRDFRank ?r }
ORDER BY DESC(?r)
LIMIT 100
```

## Find anything with a label

The following query will find all triples where subject and object are joined by `rdfs:label`. In other words, anything that has been defined as having a label.

``` sparql
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
SELECT ?subject ?label
WHERE { ?subject rdfs:label ?label } LIMIT 100
```

## Find instances by class with a label

The following example query will get the labels of anything of the class type (`rdf:type`) Organization.

``` saprql
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
SELECT ?subject ?label
WHERE {
    ?subject rdf:type <http://codyburleson.com/hyperg#Organization> .
    ?subject rdfs:label ?label
} LIMIT 100
```

## Find all subjects with a given object property

``` sparql
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX bc: <http://www.base22.com/ontologies/2010/5/bc.owl#>
SELECT ?subject
WHERE { ?subject bc:hasEmployer <http://www.base22.com/ontologies/2010/5/my-contacts.owl#IBM> } LIMIT 100
```

From my contacts ontology, I find all IBMers (i.e. the hasEmployer predicate points to the individual IBM, which is an object of type Organization).

## Use multiple triple patterns to retrieve multiple properties

``` sparql
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX bc: <http://www.base22.com/ontologies/2010/5/bc.owl#>
SELECT *
WHERE {
  ?subject bc:hasEmployer <http://www.base22.com/ontologies/2010/5/my-contacts.owl#IBM> .
           ?subject bc:hasBusinessEmail ?email .
}
```

From my contacts ontology, I find all IBMers and return also their email address in the query results.

## Find all classes

``` sparql
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
 
SELECT DISTINCT ?type
WHERE {
  ?s a ?type.
}
```

The SPARQL keyword, `a`, is a shortcut for the common predicate `rdf:type`, giving the class of a resource.

## Find all classes with a given prefix

``` sparql
PREFIX bc: <http://base22.com/ont/bc#>
 
SELECT DISTINCT ?type
WHERE {
  ?subject a ?type.
  FILTER( STRSTARTS(STR(?type),str(bc:)) )
}
```

The SPARQL keyword, `a`, is a shortcut for the common predicate `rdf:type`, giving the class of a resource.

## Query from a particular graph on the web

``` sparql
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX card: <http://www.w3.org/People/Berners-Lee/card#>
SELECT ?homepage
FROM <http://www.w3.org/People/Berners-Lee/card>
WHERE {
 card:i foaf:knows ?known .
 ?known foaf:homepage ?homepage .
}
```

The `FROM` keyword lets us specify the target graph in the query itself.

Of interest also in the query shown above:

By using `?known` as an object of one triple and the subject of another, we traverse multiple links in the graph.

## Find subjects with a property value greater than

Find me all landlocked countries with a population greater than 15 million

``` sparql
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX type: <http://dbpedia.org/class/yago/>
PREFIX prop: <http://dbpedia.org/property/>
SELECT ?country_name ?population
WHERE {
 ?country a type:LandlockedCountries ;
 rdfs:label ?country_name ;
 prop:populationEstimate ?population .
 FILTER (?population > 15000000) .
}
```

You can try this one at the DBPedia SPARQL endpoint.

`FILTER` constraints use boolean conditions to filter out unwanted query results.

Shortcut: a semicolon (`;` can be used to separate two triple patterns that share the same subject. (`?country` is the shared subject above.)

`rdfs:label` is a common predicate for giving a human-friendly label to a resource.
