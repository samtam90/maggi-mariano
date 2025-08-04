import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Giano dell'Umbria",
  canonical: links.servizi["trasporto-rifiuti"]["giano-dell-umbria"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Giano dell'Umbria", 
    locationNames: {label: "Giano dell'Umbria", href: "giano-dell-umbria"}  
});