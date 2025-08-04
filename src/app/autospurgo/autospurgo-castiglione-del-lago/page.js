import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Castiglione del Lago" });
export default withBaseProps({ 
    title: "Autospurgo Castiglione del Lago", 
    locationNames: {label: "Castiglione del Lago", href: "castiglione-del-lago"}  
});
