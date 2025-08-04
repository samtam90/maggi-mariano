import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Monterchi",
  canonical: links.servizi["trasporto-rifiuti"]["monterchi"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Monterchi", 
    locationNames: {label: "Monterchi", href: "monterchi"}  
});