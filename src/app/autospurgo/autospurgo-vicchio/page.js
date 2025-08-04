import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Vicchio" });
export default withBaseProps({ 
    title: "Autospurgo Vicchio", 
    locationNames: {label: "Vicchio", href: "vicchio"}  
});
