import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Sigillo" });
export default withBaseProps({ 
    title: "Autospurgo Sigillo", 
    locationNames: {label: "Sigillo", href: "sigillo"}  
});
