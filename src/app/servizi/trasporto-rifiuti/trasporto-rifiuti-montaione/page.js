import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Montaione",
  canonical: links.servizi["trasporto-rifiuti"]["montaione"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Montaione", 
    locationNames: {label: "Montaione", href: "montaione"}  
});