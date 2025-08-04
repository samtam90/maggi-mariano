import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Magione",
  canonical: links.servizi["trasporto-rifiuti"]["magione"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Magione", 
    locationNames: {label: "Magione", href: "magione"}  
});