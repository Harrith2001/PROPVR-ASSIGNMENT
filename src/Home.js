import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";

function Home() {
  const accessKey ="lREd57L0lN_VrethbtOt9_o65UeReHrSP3SCuVLSWuY"
  const [images, setImages] = useState([])
  const [searchString, setSearchString] = useState("");


  useEffect(()=>{
    fetch(`https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=10`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      setImages(json)
    })
  }, [])

  const handleSubmit=(e)=>{
    e.preventDefault();
    fetch(`https://api.unsplash.com/photos/random/?query=${searchString}&client_id=${accessKey}&count=10`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      setImages(json)
    })  }


  return (
<>
    <div className="App">
    <div className="App-header">
      <h2>Photo Search</h2>
      <form onSubmit={handleSubmit}>
      <input placeholder="Search images" type='text'  value={searchString} onChange={(e) => setSearchString(e.target.value)}/>
      <button>Submit</button>
    </form>
    <br/>

    <div className="search_results">
      {images.map(photo => <a href={`/photo/${photo.id}`}><img src={photo.urls.small} width={500} height={500}alt="pic" /></a>)}
    </div>
    </div>
   
  </div>
  </>
  );
}

export default Home;
