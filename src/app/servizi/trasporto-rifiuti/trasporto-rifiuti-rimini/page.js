import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Rimini",
  canonical: links.servizi["trasporto-rifiuti"]["rimini"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Rimini", 
    locationNames: {label: "Rimini", href: "rimini"}  
});