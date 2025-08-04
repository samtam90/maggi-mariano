import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Campobasso",
  canonical: links.servizi["trasporto-acqua"]["campobasso"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Campobasso", 
    locationNames: {label: "Campobasso", href: "campobasso"}  
});