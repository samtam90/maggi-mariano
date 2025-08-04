import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Bolzano",
  canonical: links.servizi["trasporto-rifiuti"]["bolzano"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Bolzano", 
    locationNames: {label: "Bolzano", href: "bolzano"}  
});