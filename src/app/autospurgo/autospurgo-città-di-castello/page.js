import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Città di Castello" });
export default withBaseProps({ 
    title: "Autospurgo Città di Castello", 
    locationNames: {label: "Città di Castello", href: "città-di-castello"}  
});
