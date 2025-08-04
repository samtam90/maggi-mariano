import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Talla",
  canonical: links.servizi["trasporto-rifiuti"]["talla"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Talla", 
    locationNames: {label: "Talla", href: "talla"}  
});