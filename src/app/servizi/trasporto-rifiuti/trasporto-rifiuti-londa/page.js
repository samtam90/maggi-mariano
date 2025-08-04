import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Londa",
  canonical: links.servizi["trasporto-rifiuti"]["londa"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Londa", 
    locationNames: {label: "Londa", href: "londa"}  
});