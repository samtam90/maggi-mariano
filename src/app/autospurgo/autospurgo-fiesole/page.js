import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Fiesole" });
export default withBaseProps({ 
    title: "Autospurgo Fiesole", 
    locationNames: {label: "Fiesole", href: "fiesole"}  
});
