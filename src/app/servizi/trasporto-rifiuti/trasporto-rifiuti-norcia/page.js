import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Norcia",
  canonical: links.servizi["trasporto-rifiuti"]["norcia"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Norcia", 
    locationNames: {label: "Norcia", href: "norcia"}  
});