import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Corciano" });
export default withBaseProps({ 
    title: "Autospurgo Corciano", 
    locationNames: {label: "Corciano", href: "corciano"}  
});
