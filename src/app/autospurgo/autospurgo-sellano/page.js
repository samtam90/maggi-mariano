import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Sellano" });
export default withBaseProps({ 
    title: "Autospurgo Sellano", 
    locationNames: {label: "Sellano", href: "sellano"}  
});
