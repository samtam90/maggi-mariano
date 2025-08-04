import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Castiglione del Lago" });
export default withBaseProps({ 
    title: "Pulizia fognature Castiglione del Lago", 
    locationNames: {label: "Castiglione del Lago", href: "castiglione-del-lago"}  
});
