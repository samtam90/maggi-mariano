import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Sondrio",
  canonical: links.servizi["trasporto-rifiuti"]["sondrio"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Sondrio", 
    locationNames: {label: "Sondrio", href: "sondrio"}  
});