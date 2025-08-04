import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Montone",
  canonical: links.servizi["trasporto-acqua"]["montone"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Montone", 
    locationNames: {label: "Montone", href: "montone"}  
});