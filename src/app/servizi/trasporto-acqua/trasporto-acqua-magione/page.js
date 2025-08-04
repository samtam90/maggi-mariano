import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Magione",
  canonical: links.servizi["trasporto-acqua"]["magione"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Magione", 
    locationNames: {label: "Magione", href: "magione"}  
});