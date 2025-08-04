import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Castiglion Fibocchi",
  canonical: links.servizi["spurgo-fosse-biologiche"]["castiglion-fibocchi"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Castiglion Fibocchi", 
    locationNames: {label: "Castiglion Fibocchi", href: "castiglion-fibocchi"}  
});
