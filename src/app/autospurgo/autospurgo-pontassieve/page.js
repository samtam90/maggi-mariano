import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Pontassieve" });
export default withBaseProps({ 
    title: "Autospurgo Pontassieve", 
    locationNames: {label: "Pontassieve", href: "pontassieve"}  
});
