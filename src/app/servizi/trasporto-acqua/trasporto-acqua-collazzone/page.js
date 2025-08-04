import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Collazzone",
  canonical: links.servizi["trasporto-acqua"]["collazzone"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Collazzone", 
    locationNames: {label: "Collazzone", href: "collazzone"}  
});