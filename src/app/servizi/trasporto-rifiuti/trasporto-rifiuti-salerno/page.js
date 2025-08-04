import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Salerno",
  canonical: links.servizi["trasporto-rifiuti"]["salerno"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Salerno", 
    locationNames: {label: "Salerno", href: "salerno"}  
});