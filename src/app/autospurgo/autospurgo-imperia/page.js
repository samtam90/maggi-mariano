import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Imperia" });
export default withBaseProps({ 
    title: "Autospurgo Imperia", 
    locationNames: {label: "Imperia", href: "imperia"}  
});
