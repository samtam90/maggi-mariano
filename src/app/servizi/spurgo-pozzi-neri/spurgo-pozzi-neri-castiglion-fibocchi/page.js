import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Castiglion Fibocchi",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Castiglion Fibocchi", 
    locationNames: {label: "Castiglion Fibocchi", href: "castiglion-fibocchi"}  
});