import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Ravenna",
  canonical: links.servizi["trasporto-rifiuti"]["ravenna"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Ravenna", 
    locationNames: {label: "Ravenna", href: "ravenna"}  
});