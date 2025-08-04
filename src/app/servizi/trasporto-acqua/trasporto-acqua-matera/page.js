import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Matera",
  canonical: links.servizi["trasporto-acqua"]["matera"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Matera", 
    locationNames: {label: "Matera", href: "matera"}  
});