import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Montaione" });
export default withBaseProps({ 
    title: "Autospurgo Montaione", 
    locationNames: {label: "Montaione", href: "montaione"}  
});
