import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Teramo",
  canonical: links.servizi["trasporto-acqua"]["teramo"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Teramo", 
    locationNames: {label: "Teramo", href: "teramo"}  
});