import './App.css'
import { usePostTitle } from './hooks/useFetch';

//basic understanding of usefetch hook
function App() {
  
  const postTitle=usePostTitle();

  return (
  <div>
    {postTitle}
  </div>
  )

  
}


export default App
