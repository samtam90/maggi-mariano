import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Agrigento",
  canonical: links.servizi["trasporto-acqua"]["agrigento"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Agrigento", 
    locationNames: {label: "Agrigento", href: "agrigento"}  
});