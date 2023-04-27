import { useEffect, useState } from "react";

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

const fetchTours = async () => {
  setIsLoading(true);
  try{
    const response = await fetch(url);
    const tours = await response.json()
    console.log(tours);
  }catch(e){
    console.log(e);
  }
}
 
  useEffect(() => {
    fetchTours()
  },[]);

  return (
    <div className="App">
      <p>Hello</p>
    </div>
  );
}

export default App;
