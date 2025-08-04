import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Cascia",
  canonical: links.servizi["trasporto-rifiuti"]["cascia"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Cascia", 
    locationNames: {label: "Cascia", href: "cascia"}  
});