import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Crotone" });
export default withBaseProps({ 
    title: "Autospurgo Crotone", 
    locationNames: {label: "Crotone", href: "crotone"}  
});
