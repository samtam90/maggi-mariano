import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Vinci" });
export default withBaseProps({ 
    title: "Autospurgo Vinci", 
    locationNames: {label: "Vinci", href: "vinci"}  
});
