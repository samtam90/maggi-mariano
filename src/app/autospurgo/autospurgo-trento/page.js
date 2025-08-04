import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Trento" });
export default withBaseProps({ 
    title: "Autospurgo Trento", 
    locationNames: {label: "Trento", href: "trento"}  
});
