import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Ogliastra" });
export default withBaseProps({ 
    title: "Autospurgo Ogliastra", 
    locationNames: {label: "Ogliastra", href: "ogliastra"}  
});
