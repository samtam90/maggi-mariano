import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Crotone",
  canonical: links.servizi["trasporto-rifiuti"]["crotone"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Crotone", 
    locationNames: {label: "Crotone", href: "crotone"}  
});