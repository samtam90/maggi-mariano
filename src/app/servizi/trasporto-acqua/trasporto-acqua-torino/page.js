import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Torino",
  canonical: links.servizi["trasporto-acqua"]["torino"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Torino", 
    locationNames: {label: "Torino", href: "torino"}  
});