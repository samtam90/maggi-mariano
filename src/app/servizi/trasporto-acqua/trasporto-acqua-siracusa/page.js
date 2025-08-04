import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Siracusa",
  canonical: links.servizi["trasporto-acqua"]["siracusa"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Siracusa", 
    locationNames: {label: "Siracusa", href: "siracusa"}  
});