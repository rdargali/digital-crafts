fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json =>
    json.map(object => {
      return object.completed;
    })
  )
  .then(json => json.filter(object => object == true))
  .then(json => console.log(json));
