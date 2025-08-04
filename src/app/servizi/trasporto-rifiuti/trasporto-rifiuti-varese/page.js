import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Varese",
  canonical: links.servizi["trasporto-rifiuti"]["varese"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Varese", 
    locationNames: {label: "Varese", href: "varese"}  
});