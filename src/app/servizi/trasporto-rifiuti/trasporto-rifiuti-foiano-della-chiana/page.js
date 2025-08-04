import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Foiano della Chiana",
  canonical: links.servizi["trasporto-rifiuti"]["foiano-della-chiana"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Foiano della Chiana", 
    locationNames: {label: "Foiano della Chiana", href: "foiano-della-chiana"}  
});