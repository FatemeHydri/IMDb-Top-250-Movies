import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import titleMaker from "../../helpers/titleMaker";
import "./style.css";
import { HeartOutlined, LoadingOutlined } from '@ant-design/icons';

export default function SingleItem() {
    const {id} = useParams();
    const [data, setData]= useState({title: ""});
    const [loading, setLoading]= useState(true);
    useEffect(()=> {
        getApi()
    },[id])
    useEffect(()=> {
        titleMaker(data.title);
    },[data])
    function getApi() {
        axios.get(`https://moviesapi.codingfront.dev/api/v1/movies/${id}`)
        .then(function(res) {
            setData(res.data);
            setLoading(false);
        })
        .catch(function(err) {
            setLoading(false);
        })
    }
    return (
        <PrimaryLayout>
          <div className="container">
            <div className="single">
            {loading == false ? (
            <Fragment>
            <div className="left">
               <img src={data.poster}/>
            </div>
            <div className="right"> 
              <div className="upContent">  
               <h1>{data.title}</h1>
               <span>{data.genres.join(', ')}</span>
               <span className="one"> | </span>
               <span>{data.year}</span>
               <span className="one"> | </span>
               <span>{data.country}</span>
               <span className="one"> | </span>
               <span>{data.runtime}</span>
              </div> 
               <div className="midContent">
                   <span className="icon"></span>
                   <span>{data.imdb_votes}</span>
                   <HeartOutlined style={{paddingLeft: "100px", color: "red"}}/>
                   <span>{data.metascore}</span>
                  <div className="actor"> 
                   <span className="act">{"Actors : "}</span> 
                   <span>{data.actors}</span>
                  </div>
                  <div className="director">
                  <span className="direct">{"Director : "}</span>
                   <span>{data.director}</span>
                   </div>
               </div>
               <p>{data.plot}</p>
            </div>
            </Fragment>
            ) : (
                <LoadingOutlined style={{color: "#fff"}}/>
            )}
            </div>
          </div>
        </PrimaryLayout>
    );
}