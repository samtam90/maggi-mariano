import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Ragusa",
  canonical: links.servizi["trasporto-rifiuti"]["ragusa"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Ragusa", 
    locationNames: {label: "Ragusa", href: "ragusa"}  
});