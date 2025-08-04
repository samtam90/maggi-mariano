import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Torgiano",
  canonical: links.servizi["trasporto-rifiuti"]["torgiano"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Torgiano", 
    locationNames: {label: "Torgiano", href: "torgiano"}  
});