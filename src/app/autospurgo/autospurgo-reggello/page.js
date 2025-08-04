import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Reggello" });
export default withBaseProps({ 
    title: "Autospurgo Reggello", 
    locationNames: {label: "Reggello", href: "reggello"}  
});
