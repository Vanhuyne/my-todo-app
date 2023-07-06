import ListHeader from './components/ListHeader'
import  ListItem  from "./components/ListItem";
import Auth from './components/Auth';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const authToken = cookies.AuthToken
  const userEmail = cookies.Email;
  const [tasks, setTasks] = useState(null);

  const getData = async () =>{  
    try {
      const response = await fetch(`${process.env.REACT_APP_URL}/todos/${userEmail}`)
      const json = await response.json()
      setTasks(json)
    } catch (error) {
      console.error(error)
    }
  } 

  useEffect(() => {
    if (authToken) {
      getData();
    }}
    ,[]);



  //Sort by tasks
  const sortedTasks = tasks?.sort((a,b) => new Date(a.date) - new Date(b.date))


  return (
    <div className = "app">
      {!authToken && <Auth/>}
      {authToken && 
        <>
        <ListHeader listName = { 'My to-do list'} getData={getData}/>
        <p className="user-email">Welcome back {userEmail}</p>
        {sortedTasks?.map((task) => <ListItem key={task.id} task={task} getData={getData}/>)}
        </>}
        <p className="copyright">© Creative Coding LLC | Make by Huy</p>
    </div>
  )
}

export default App;
