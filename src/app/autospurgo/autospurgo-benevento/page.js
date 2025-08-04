import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Benevento" });
export default withBaseProps({ 
    title: "Autospurgo Benevento", 
    locationNames: {label: "Benevento", href: "benevento"}  
});
