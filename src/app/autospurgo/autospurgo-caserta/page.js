import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Caserta" });
export default withBaseProps({ 
    title: "Autospurgo Caserta", 
    locationNames: {label: "Caserta", href: "caserta"}  
});
