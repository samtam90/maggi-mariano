import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Teramo",
  canonical: links.servizi["trasporto-rifiuti"]["teramo"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Teramo", 
    locationNames: {label: "Teramo", href: "teramo"}  
});