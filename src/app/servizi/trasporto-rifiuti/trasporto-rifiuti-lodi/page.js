import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Lodi",
  canonical: links.servizi["trasporto-rifiuti"]["lodi"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Lodi", 
    locationNames: {label: "Lodi", href: "lodi"}  
});