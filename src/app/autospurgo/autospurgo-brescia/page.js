import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Brescia" });
export default withBaseProps({ 
    title: "Autospurgo Brescia", 
    locationNames: {label: "Brescia", href: "brescia"}  
});
