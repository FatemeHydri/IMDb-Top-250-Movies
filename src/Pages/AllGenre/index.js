import { useEffect, useState, Fragment } from "react";
import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import titleMaker from "../../helpers/titleMaker";
import MovieListByGenre from "../../Components/MovieListByGenre";
import axios from "axios";
import { LoadingOutlined } from '@ant-design/icons';

export default function AllGenre() {
  const [genres, setGenres] = useState([]);
   const [loading, setLoading] = useState(true);
   useEffect(function() {
    titleMaker ("IMDb's Top 250 Movies");
},[]);
   
   useEffect(function() {
    getApi();
},[]);
function getApi(){
    axios.get(`https://moviesapi.codingfront.dev/api/v1/genres`)
    .then((res) => {
      setGenres(res.data);
      setLoading(false); 
    })
    .catch((err) => {
      setLoading(false); 
    });
}
function renderFarm() {
  if(genres.length === 0) {
    return <h1> Empty Data ...</h1>
  }
  return genres.map(({id, name}) => {
    return(
     <MovieListByGenre key={id}  genreId={id} headerDetail={{title: `${name}`, link:`/genre/${id}}`}} />
 )
  })
}
return(
  <PrimaryLayout>
    <div className="container">
      {loading === false ? (<Fragment>{renderFarm()}</Fragment>) : ( <LoadingOutlined style={{color: "#fff"}}/> )}   
     </div>
  </PrimaryLayout>
)
}