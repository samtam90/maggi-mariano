import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Castiglion Fibocchi",
  canonical: links.servizi["trasporto-acqua"]["castiglion-fibocchi"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Castiglion Fibocchi", 
    locationNames: {label: "Castiglion Fibocchi", href: "castiglion-fibocchi"}  
});