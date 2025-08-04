import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Gubbio" });
export default withBaseProps({ 
    title: "Autospurgo Gubbio", 
    locationNames: {label: "Gubbio", href: "gubbio"}  
});
