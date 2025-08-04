import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Vicchio",
  canonical: links.servizi["trasporto-rifiuti"]["vicchio"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Vicchio", 
    locationNames: {label: "Vicchio", href: "vicchio"}  
});