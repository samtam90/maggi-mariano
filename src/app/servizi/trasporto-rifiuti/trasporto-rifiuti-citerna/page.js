import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Citerna",
  canonical: links.servizi["trasporto-rifiuti"]["citerna"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Citerna", 
    locationNames: {label: "Citerna", href: "citerna"}  
});