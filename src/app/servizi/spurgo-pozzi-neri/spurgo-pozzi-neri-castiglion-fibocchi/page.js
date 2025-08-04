import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Castiglion Fibocchi",
  canonical: links.servizi["spurgo-pozzi-neri"]["castiglion-fibocchi"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Castiglion Fibocchi", 
    locationNames: {label: "Castiglion Fibocchi", href: "castiglion-fibocchi"}  
});