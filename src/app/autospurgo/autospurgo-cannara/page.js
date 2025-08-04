import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Cannara" });
export default withBaseProps({ 
    title: "Autospurgo Cannara", 
    locationNames: {label: "Cannara", href: "cannara"}  
});
