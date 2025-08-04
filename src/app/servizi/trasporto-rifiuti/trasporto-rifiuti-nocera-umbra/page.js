import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Nocera Umbra",
  canonical: links.servizi["trasporto-rifiuti"]["nocera-umbra"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Nocera Umbra", 
    locationNames: {label: "Nocera Umbra", href: "nocera-umbra"}  
});