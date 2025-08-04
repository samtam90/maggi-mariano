import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Costacciaro" });
export default withBaseProps({ 
    title: "Autospurgo Costacciaro", 
    locationNames: {label: "Costacciaro", href: "costacciaro"}  
});
