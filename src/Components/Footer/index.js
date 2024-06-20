import { footerMenu } from "../../Data/menu";
import Menu from "../Menu";
import "./style.css"


export default function Footer() {
    return (
        <div className="footer">
          <div className="menu">
          <div className="container"> 
            <Menu menuItems={footerMenu}/>
          </div>
          </div>
        </div>
    );
}