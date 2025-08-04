import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Fratta Todina" });
export default withBaseProps({ 
    title: "Autospurgo Fratta Todina", 
    locationNames: {label: "Fratta Todina", href: "fratta-todina"}  
});
