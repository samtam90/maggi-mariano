import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Cortona" });
export default withBaseProps({ 
    title: "Autospurgo Cortona", 
    locationNames: {label: "Cortona", href: "cortona"}  
});
