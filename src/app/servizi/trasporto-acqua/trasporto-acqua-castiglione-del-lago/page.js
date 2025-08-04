import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Castiglione del Lago",
});
export default withBaseProps({ 
    title: "Trasporto acqua Castiglione del Lago", 
    locationNames: {label: "Castiglione del Lago", href: "castiglione-del-lago"}  
});