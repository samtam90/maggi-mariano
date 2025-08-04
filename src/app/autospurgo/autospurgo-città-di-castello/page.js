import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Città di Castello",
    canonical: links.autospurgo["città-di-castello"],
});
export default withBaseProps({ 
    title: "Autospurgo Città di Castello", 
    locationNames: {label: "Città di Castello", href: "città-di-castello"}  
});
