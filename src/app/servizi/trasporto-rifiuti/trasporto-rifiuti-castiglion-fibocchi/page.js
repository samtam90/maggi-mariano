import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Castiglion Fibocchi",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Castiglion Fibocchi", 
    locationNames: {label: "Castiglion Fibocchi", href: "castiglion-fibocchi"}  
});