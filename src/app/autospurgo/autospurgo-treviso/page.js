import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Treviso" });
export default withBaseProps({ 
    title: "Autospurgo Treviso", 
    locationNames: {label: "Treviso", href: "treviso"}  
});
