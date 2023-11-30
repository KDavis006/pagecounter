import {useState, useEffect} from 'react'

const PageViewCounter = () => {
 const [count, setCount] = useState(0);
  useEffect(() => {
   // window.localStorage.setItem("count", count);
   let views = localStorage.getItem("views");
   let temp = Number(views) || 0;
   setCount(temp+1);
   localStorage.setItem("views", temp+1);

  }, []);
  return (
    <div className='flex-container'>
      <h1 className='counter'>Visits: {count}</h1>
    </div>
  );
}

export default PageViewCounter