import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Rovigo" });
export default withBaseProps({ 
    title: "Autospurgo Rovigo", 
    locationNames: {label: "Rovigo", href: "rovigo"}  
});
