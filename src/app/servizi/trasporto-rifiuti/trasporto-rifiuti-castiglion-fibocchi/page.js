import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Castiglion Fibocchi",
  canonical: links.servizi["trasporto-rifiuti"]["castiglion-fibocchi"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Castiglion Fibocchi", 
    locationNames: {label: "Castiglion Fibocchi", href: "castiglion-fibocchi"}  
});