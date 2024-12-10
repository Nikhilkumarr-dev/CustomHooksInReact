import './App.css'
import { useFetch} from './hooks/useFetch';

//basic understanding of usefetch hook
function App() {
  
  const {finalData} = useFetch("https://jsonplaceholder.typicode.com/posts/1");


  return (
  <div>
    {JSON.stringify(finalData)}
  </div>
  )  
}


export default App
