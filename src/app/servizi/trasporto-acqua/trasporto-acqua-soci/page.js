import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Soci",
  canonical: links.servizi["trasporto-acqua"]["soci"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Soci", 
    locationNames: {label: "Soci", href: "soci"}  
});