import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Biella" });
export default withBaseProps({ 
    title: "Autospurgo Biella", 
    locationNames: {label: "Biella", href: "biella"}  
});
