import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Udine",
  canonical: links.servizi["trasporto-acqua"]["udine"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Udine", 
    locationNames: {label: "Udine", href: "udine"}  
});