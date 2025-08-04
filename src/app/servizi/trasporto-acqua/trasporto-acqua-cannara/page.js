import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Cannara",
  canonical: links.servizi["trasporto-acqua"]["cannara"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Cannara", 
    locationNames: {label: "Cannara", href: "cannara"}  
});