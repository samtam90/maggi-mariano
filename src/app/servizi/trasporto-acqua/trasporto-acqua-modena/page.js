import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Modena",
  canonical: links.servizi["trasporto-acqua"]["modena"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Modena", 
    locationNames: {label: "Modena", href: "modena"}  
});