import {  useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import { Pagination } from "antd";
import { useSearchParams, createSearchParams } from "react-router-dom";
import "./style.css";
import { LoadingOutlined } from '@ant-design/icons';
import titleMaker from "../../helpers/titleMaker";

export default function AllMovie() {
    const [loading, setLoading] = useState(true);
    const{ id } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const [moviesData, setMoviesData]= useState({
        data: [],
        metadata: {}, 
    });
    useEffect(() => {
        titleMaker("IMDb's Top 250 Movies");
    }, [])
    useEffect(function() {
        getApi(searchParams.get("page") ? searchParams.get("page") : 1);
    },[])
    function getApi(page = 1) {
        axios.get(`https://moviesapi.codingfront.dev/api/v1/movies?page=${page}`)
        .then(function(res) {
            setMoviesData(res.data)
            console.log(moviesData)
            setLoading(false)
        })
        .catch(function(err) {
            setLoading(false)
        });
    }
    function renderFarm() {
        return moviesData.data.map(function({id, poster, title, year, genres}) {
            return (
                <li key={id}>
                    <Link to={`/movie/${id}`}>
                    <div className="cover">   
                       <img className="images" src={poster}/>
                       <div className="transparent"></div>
                      <div className="hoverBox">
                        <h6>{year}</h6>
                        <h6>{genres.join(', ')}</h6>
                      </div>
                    </div> 
                      <h5>{title.length <= 20 ? title : title.substring(0,15).concat(" ...")}</h5>
                    </Link>
                </li>
            )
        });
    }
    function render() {
        if(loading === true) {
            return (
            <div className="container">
              <LoadingOutlined style={{color: "#fff"}}/>
            </div> 
            )
        }
        return  (
        <div className="movie-list">
        {moviesData.data.length == 0 ? (
        <div className="empty">    
          <h1>Oops!</h1>
          <p>Empty Data ...</p>
      </div>
       ):(
        <div className="lista">
            <div className="container">
              <ul>{renderFarm()}</ul>
            </div>
        </div>
       )}
       </div>
    ); 
   }
   function onPageChange(page) {
    setSearchParams(createSearchParams({page : page}))
    getApi(page)
   }
    return (<PrimaryLayout>{render()}
    <div className="pagination">
    <Pagination  className="custom-pagination" style={{textAlign: "center", paddingBottom: "70px"}}
    onChange={onPageChange}
    current={moviesData.metadata.current_page} 
    total={moviesData.metadata.total_count}
    pageSize={moviesData.metadata.per_page}/>;
    </div>
    </PrimaryLayout>
    )
}