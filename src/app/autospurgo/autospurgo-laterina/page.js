import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Laterina" });
export default withBaseProps({ 
    title: "Autospurgo Laterina", 
    locationNames: {label: "Laterina", href: "laterina"}  
});
