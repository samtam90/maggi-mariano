import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Forlì-Cesena" });
export default withBaseProps({ 
    title: "Autospurgo Forlì-Cesena", 
    locationNames: {label: "Forlì-Cesena", href: "forli-cesena"}  
});
