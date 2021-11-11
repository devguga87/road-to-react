import { useState } from "react"


const List = ({list}) => {
  console.log('List render')
  
  return (
    <ul>
    {list.map(item => {
      return (
        <Item key={item.objectID} item={item}/>
    )})}
    </ul>
  )
}

const Item = ({item}) => {
  console.log('Item render')
  return (
    <li>
      <span><a href={item.url} >{item.title}</a></span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </li>
  )
}
const Search = ({onSearch}) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
    onSearch(e)
  }
  console.log('Saerch render')
  return(
    <div>
      <label htmlFor="search">Search:</label>
      <input type="search" name="search" id="search"  onChange={handleChange}/>

      <p>Searching for <strong>{searchTerm}</strong></p>
    </div>
  )
}

const App = () => {

const stories = [
  {
    title:'React',
    url:'https://reactjs.org/',
    author:'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID:0,
  },
  {
    title:'Redux',
    url:'https://redux.js.org/',
    author:'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID:1,
  }
]
const handleSearch = (event) => {
  console.log(event.target.value)
}

console.log('App renders')
  return (
    <div>
      <h1>My hacker stories</h1>
      <Search onSearch={handleSearch}/>
      <hr />
      <List list={stories}/>
      <List list={stories}/>

    </div>
  );
}

export default App;
