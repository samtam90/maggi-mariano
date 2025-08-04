import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Ragusa",
  canonical: links.servizi["trasporto-acqua"]["ragusa"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Ragusa", 
    locationNames: {label: "Ragusa", href: "ragusa"}  
});