import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Marsciano" });
export default withBaseProps({ 
    title: "Autospurgo Marsciano", 
    locationNames: {label: "Marsciano", href: "marsciano"}  
});
