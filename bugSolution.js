```javascript
function findDocuments(field, values) {
  if (values.length === 0) {
    // Handle empty array case - return all documents
    return db.collection.find({});
  } else {
    return db.collection.find({field: {$in: values}});
  }
}

// Example usage
const result = findDocuments('field', []); // Returns all documents
console.log(result);
const result2 = findDocuments('field', [1,2,3]); // Returns documents with field in [1,2,3]
console.log(result2)
```