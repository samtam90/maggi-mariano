import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Montone",
  canonical: links.servizi["trasporto-rifiuti"]["montone"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Montone", 
    locationNames: {label: "Montone", href: "montone"}  
});