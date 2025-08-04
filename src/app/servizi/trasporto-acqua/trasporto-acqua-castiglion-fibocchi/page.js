import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Castiglion Fibocchi",
});
export default withBaseProps({ 
    title: "Trasporto acqua Castiglion Fibocchi", 
    locationNames: {label: "Castiglion Fibocchi", href: "castiglion-fibocchi"}  
});