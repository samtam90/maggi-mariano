import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Foggia",
  canonical: links.servizi["trasporto-acqua"]["foggia"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Foggia", 
    locationNames: {label: "Foggia", href: "foggia"}  
});