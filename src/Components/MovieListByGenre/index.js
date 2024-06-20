import { Fragment, useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { RightOutlined } from '@ant-design/icons';

export default function MovieListByGenre({headerDetail, genreId="1"}) {
    const {title, link} = headerDetail;
    const [loading, setLoading] = useState(true);
    const [moviesData, setMoviesData]= useState({
        data: [],
        metadata: {}, 
    });
    useEffect(function() {
        getApi();
    },[])
    function getApi() {
        axios.get(`https://moviesapi.codingfront.dev/api/v1/genres/${genreId}/movies`)
        .then(function(res) {
            setMoviesData(res.data)
            // setLoading(false)
        })
        .catch(function(err) {
            // setLoading(false)
        });
    }

    function renderFarm() {
        return moviesData.data.map(function({id, poster, title}) {
            return (
                <li key={id}>
                    <Link to={`/movie/${id}`}>
                    <div className="cover">    
                      <img src={poster}/>
                      <div className="overlay"></div>
                    </div>
                      <h5>{title.length <= 20 ? title : title.substring(0,15).concat(" ...")}</h5>
                    </Link>
                </li>
            )
        });
    }
    function render() {
        // if(loading === true) {
        //     return <LoadingOutlined style={{color: "#fff"}}/>
        // }
        return  ( 
        <div className="movie-list">
         <div className="list-header">
            <h2>{title}</h2>
            <Link to={link}>all<RightOutlined style={{paddingLeft:"7px", fontSize: "12px"}}/></Link>
         </div>
        {moviesData.data.length == 0 ? (
        <div className="empty">    
          <h1>Oops!</h1>
          <p>Empty Data...</p>
        </div>
        ):(
        <div className="list">
            <ul>
                {renderFarm()}
            </ul>
        </div>
       )}
       </div> 
    ); 
   }
    return <Fragment>{render()}</Fragment>
}