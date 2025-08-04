import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Campobasso" });
export default withBaseProps({ 
    title: "Autospurgo Campobasso", 
    locationNames: {label: "Campobasso", href: "campobasso"}  
});
