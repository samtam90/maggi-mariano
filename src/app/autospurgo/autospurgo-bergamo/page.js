import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Bergamo" });
export default withBaseProps({ 
    title: "Autospurgo Bergamo", 
    locationNames: {label: "Bergamo", href: "bergamo"}  
});
