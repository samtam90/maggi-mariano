import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Foiano della Chiana" });
export default withBaseProps({ 
    title: "Autospurgo Foiano della Chiana", 
    locationNames: {label: "Foiano della Chiana", href: "foiano-in-valdichiana"}  
});
