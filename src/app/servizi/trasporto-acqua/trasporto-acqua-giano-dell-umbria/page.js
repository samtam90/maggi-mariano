import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Giano dell'Umbria",
  canonical: links.servizi["trasporto-acqua"]["giano-dell-umbria"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Giano dell'Umbria", 
    locationNames: {label: "Giano dell'Umbria", href: "giano-dell-umbria"}  
});