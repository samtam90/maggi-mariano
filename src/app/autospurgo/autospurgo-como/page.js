import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Como" });
export default withBaseProps({ 
    title: "Autospurgo Como", 
    locationNames: {label: "Como", href: "como"}  
});
