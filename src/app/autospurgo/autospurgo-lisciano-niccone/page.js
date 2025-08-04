import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Lisciano Niccone" });
export default withBaseProps({ 
    title: "Autospurgo Lisciano Niccone", 
    locationNames: {label: "Lisciano Niccone", href: "lisciano-niccone"}  
});
