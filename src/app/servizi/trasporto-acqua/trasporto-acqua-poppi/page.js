import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Poppi",
  canonical: links.servizi["trasporto-acqua"]["poppi"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Poppi", 
    locationNames: {label: "Poppi", href: "poppi"}  
});