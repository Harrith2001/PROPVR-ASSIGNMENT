import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";
import { useParams} from "react-router-dom";


function Photodetail(props) {
  const accessKey ="lREd57L0lN_VrethbtOt9_o65UeReHrSP3SCuVLSWuY"
  const [imageDetail, setImageDetail] = useState([])
  const [status, setStatus]= useState(false)

  const params = useParams();

  const fetchDetailsJSON = async()=> {
    await fetch(`https://api.unsplash.com/photos/${params.photoid}?client_id=${accessKey}`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
        setImageDetail(json)
        setStatus(true)
        })
  }
  
  useEffect(()=>{
      fetchDetailsJSON()
  }, [])


  const shareurl = () =>{
    if (navigator.share) { 
      navigator.share({
         title: 'view the image.',
         url: `${imageDetail.urls.small}`
       }).then(() => {
         console.log('Thanks for sharing!');
       })
       .catch(console.error);
       } 
   }
    
     

  return (
<>
    <div className="App">
    <div className="App-header">
    {
        status? <>
         <div className="search_results">
        <img src={imageDetail.urls.small} width={500} height={500}alt="pic"/>
        <br/>
        <button onClick={shareurl}style={{height:"50px", width:"100px" }}> Share </button>
        &nbsp;

        <a href={`${imageDetail.urls.small_s3}`} download><button style={{height:"50px", width:"100px" }}> Download </button></a>
       <br/>
       <p> Likes: {imageDetail.likes}</p>
       <p> Downloads: {imageDetail.downloads}</p>

        <p>{imageDetail.description}</p>
    </div>
        </>:<h1>Loading</h1>
    }

   
    </div>
   
  </div>
  </>
  );
}

export default Photodetail;
