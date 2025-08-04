import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Terni",
  canonical: links.servizi["trasporto-acqua"]["terni"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Terni", 
    locationNames: {label: "Terni", href: "terni"}  
});