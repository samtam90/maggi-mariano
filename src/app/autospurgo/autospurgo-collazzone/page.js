import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Collazzone" });
export default withBaseProps({ 
    title: "Autospurgo Collazzone", 
    locationNames: {label: "Collazzone", href: "collazzone"}  
});
