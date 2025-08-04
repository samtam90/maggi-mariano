import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Trento",
  canonical: links.servizi["trasporto-rifiuti"]["trento"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Trento", 
    locationNames: {label: "Trento", href: "trento"}  
});