import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Castiglion Fibocchi",
  canonical: links.servizi["pulizia-fognature"]["castiglion-fibocchi"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Castiglion Fibocchi", 
    locationNames: {label: "Castiglion Fibocchi", href: "castiglion-fibocchi"}  
});
