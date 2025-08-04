import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Marciano della Chiana" });
export default withBaseProps({ 
    title: "Autospurgo Marciano della Chiana", 
    locationNames: {label: "Marciano della Chiana", href: "marciano-della-chiana"}  
});
