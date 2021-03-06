import { useState } from "react"

const list = [
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

const List = () => {
  return (
    <ul>
    {list.map(item => {
      return (
        <li key={item.objectID}>
          <span><a href={item.url} >{item.title}</a></span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>

        </li>
      )
    })}
    </ul>
  )
}

const Search = () => {
  const [data, setData] = useState('')

  const handleChange = (e) => {
    console.log(e.target.value)
  }

  return(
    <div>
      <label htmlFor="search">Search:</label>
      <input type="search" name="search" id="search"  onChange={handleChange}/>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>My hacker stories</h1>
      <Search />
      <hr />
      <List />
      <List />

    </div>
  );
}

export default App;
