import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { SearchOutlined } from '@ant-design/icons';

export default function Search() {
    const navigate = useNavigate();
    const [data, setData]= useState({
        data: [],
        metadata: {},
    });
    useEffect(() => {
        document.addEventListener('click', handleClick);
    }, []);

    function handleSearch(e) {
        if(e.target.value.length >= 3) {
        axios.get(`https://moviesapi.codingfront.dev/api/v1/movies?q=${e.target.value}`)
        .then(function(res) {
            setData(res.data)
        })
        .catch(function(err) {
            console.log(err);
        });
        }else {
            setData({
                data: [],
                metadata: {}
            });
        }
    }
    function renderResult() {
        return data.data.map(function({id, title, poster, genres}) {
            return (
                <li key={id}>
                <Link to={`/movie/${id}`}>
                  <div className="left">    
                    <img src={poster} />
                  </div> 
                  <div className="up">
                    <h4>{title.length <= 20 ? title : title.substring(0,15).concat(" ...")}</h4>
                    <p>{genres.join(', ')}</p>
                  </div> 
                  <div className="item-cover"></div>
                </Link>
                </li>
            )
        })
    }
    function handleClick() {
        setData({
            data: [],
            metadata: {}
        });
    }
    function onEnter(e) {
        if(e.key === "Enter") {
            navigate(`/search?q=${e.target.value}`);
        }
    }
    return (
        <div className="search">
           <SearchOutlined className="searchIcon" />
            <input onKeyDown={onEnter} onChange={handleSearch} placeholder="Search IMDb" />
            <div className="search-box">
               <div className="container">
                <ul>{renderResult()}</ul>
               </div>  
            </div>
        </div>
    )
}