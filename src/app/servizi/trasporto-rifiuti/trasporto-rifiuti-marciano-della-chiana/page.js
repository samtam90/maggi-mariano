import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Marciano della Chiana",
  canonical: links.servizi["trasporto-rifiuti"]["marciano-della-chiana"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Marciano della Chiana", 
    locationNames: {label: "Marciano della Chiana", href: "marciano-della-chiana"}  
});