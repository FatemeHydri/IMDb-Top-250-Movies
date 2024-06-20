import { Fragment, useEffect, useState } from "react";
import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import { useSearchParams, Link, createSearchParams } from "react-router-dom";
import axios from "axios";
import "./style.css";
// import { SearchOutlined } from '@ant-design/icons';

export default function Search() {
    const [queryStrings, setQueryStrings] = useSearchParams();
    const [data, setData]= useState({
        data: [],
        metadata: {},
    });
    useEffect(function() {
        if(queryStrings.get("q") && queryStrings.get("q") !== "")
        getApi();
    },[])
    function getApi(value) {
        axios
        .get(
            `https://moviesapi.codingfront.dev/api/v1/movies?q=${
                value ? value : queryStrings.get("q")
            }`
        )
        .then(function(res) {
            setData(res.data)
        })
        .catch(function(err) {
            console.log(err);
        });
    }
    function renderResult() {
        return data.data.map(function({id, title, poster, genres}) {
            return (
                <li key={id}>
                    <Link to={`/movie/${id}`}>
                      <div className="cover-img">
                         <img src={poster} />
                         <div className="overlay"></div>
                      </div>
                      <h3>{title.length <= 20 ? title : title.substring(0,15).concat(" ...")}</h3>
                      <p>{genres.join(', ')}</p>
                    </Link>
                </li>
            )
        })
    }
    function onType(e) {
        setQueryStrings(createSearchParams({q: e.target.value}));
        getApi(e.target.value)
    }
    return(
            <div className="container">
            <div className="pagesearch"> 
            {/* <SearchOutlined className="anticon"/> */}
              <input style={{marginTop: "10px", width: "100%"}} 
               placeholder="Search IMDb" 
               onChange={onType} /> 
              <Link to="/">
              <div className="closebtn">close</div>
              </Link>
            </div>
            <div className="searchb">
                <div className="container">
                  <ul>{renderResult()}</ul>
                </div>
            </div>
            </div>
        )
    }