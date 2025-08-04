import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Talla",
  canonical: links.servizi["trasporto-acqua"]["talla"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Talla", 
    locationNames: {label: "Talla", href: "talla"}  
});