import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Vercelli",
  canonical: links.servizi["trasporto-rifiuti"]["vercelli"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Vercelli", 
    locationNames: {label: "Vercelli", href: "vercelli"}  
});