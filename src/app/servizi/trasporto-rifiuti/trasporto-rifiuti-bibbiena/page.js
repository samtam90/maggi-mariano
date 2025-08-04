import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Bibbiena",
  canonical: links.servizi["trasporto-rifiuti"]["bibbiena"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Bibbiena", 
    locationNames: {label: "Bibbiena", href: "bibbiena"}  
});