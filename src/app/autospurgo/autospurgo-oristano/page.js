import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Oristano" });
export default withBaseProps({ 
    title: "Autospurgo Oristano", 
    locationNames: {label: "Oristano", href: "oristano"}  
});
