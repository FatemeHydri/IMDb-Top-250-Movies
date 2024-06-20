import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import "./style.css";
import titleMaker from "../../helpers/titleMaker";
import { useEffect } from "react";

export default function ContactUs() {
  useEffect(() => {
    titleMaker("IMDb's Top 250 Movies");
}, [])
    return (
        <PrimaryLayout>
       <div className="container">    
      <div className="side-box">
        <h2>Contact Us</h2>
        <form>
          <div className="contact">
            <label className="name">
              Name:
              <input type="text" />
            </label>
            <label>
              Phone:
              <input type="tel" />
            </label>
            <label>
              Email:
              <input type="email" />
            </label>
            <label className="message">
              Write Message:
              <textarea />
            </label>
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
      </div> 
    </PrimaryLayout>
  );
}
        // <PrimaryLayout>
        //     <div className="container">
        //             <div className="side-box">
        //                 <form className="contact">
        //                     <div>
        //                         <h4>Name</h4>
        //                         <input type="text" />
        //                     </div>
        //                     <div>
        //                         <h4>Phone</h4>
        //                         <input type="text" />
        //                     </div>
        //                     <div>
        //                         <h4>Email</h4>
        //                         <input type="mail" />
        //                     </div>
        //                     <div className="wriht">
        //                          <h4>Wriht Message</h4>
        //                         <textarea name="Message" cols="30" rows="8" class="control" />
        //                     </div>
        //                         <div>
        //                           <input type="submit" value="Send Message" class="message" />
        //                         </div>
        //                 </form>
        //             </div>
        //     </div>
        // </PrimaryLayout>
    // )
// }