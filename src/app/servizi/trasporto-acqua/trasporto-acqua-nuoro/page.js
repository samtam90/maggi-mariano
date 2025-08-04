import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Nuoro",
  canonical: links.servizi["trasporto-acqua"]["nuoro"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Nuoro", 
    locationNames: {label: "Nuoro", href: "nuoro"}  
});