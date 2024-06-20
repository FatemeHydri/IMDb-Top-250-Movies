import { Link } from "react-router-dom";
import {headerMenu} from "../../Data/menu";
import "./style.css";
import Menu from "../Menu"; 
import Search from "../Search";
import { Fragment } from "react";


export default function Header() {
    return ( 
        <Fragment>  
        <div className="header">
          <div className="container">
           <div className="header-container">
            <div className="left">
            <div className="logo">
                <Link to="/"><img src="/images/logo.svg" /></Link>
            </div>
            <div className="menu">
                <Menu menuItems={headerMenu}/>
            </div>  
            </div>
            <div className="right">
            <Search />  
            <Link to="/signIn"><h5>Sign in</h5></Link> 
            </div>
           </div>
          </div> 
        </div>
        </Fragment>
    );
}