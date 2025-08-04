import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Nuoro" });
export default withBaseProps({ 
    title: "Autospurgo Nuoro", 
    locationNames: {label: "Nuoro", href: "nuoro"}  
});
