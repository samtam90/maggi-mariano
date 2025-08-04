import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Pesaro-Urbino" });
export default withBaseProps({ 
    title: "Autospurgo Pesaro-Urbino", 
    locationNames: {label: "Pesaro-Urbino", href: "pesaro-urbino"}  
});
