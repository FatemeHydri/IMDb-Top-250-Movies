import Header from "../../Header";
import Footer from "../../Footer";
import { Fragment } from "react";

export default function PrimaryLayout({children}) {
    return(
        <Fragment>
             <Header />
             {children}
             <Footer />
        </Fragment>
    );
}