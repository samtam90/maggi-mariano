import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Brescia",
  canonical: links.servizi["trasporto-rifiuti"]["brescia"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Brescia", 
    locationNames: {label: "Brescia", href: "brescia"}  
});