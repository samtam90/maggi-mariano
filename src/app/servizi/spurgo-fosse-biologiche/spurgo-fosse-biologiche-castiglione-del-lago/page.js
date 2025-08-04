import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Castiglione del Lago",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Castiglione del Lago", 
    locationNames: {label: "Castiglione del Lago", href: "castiglione-del-lago"}  
});
