import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Torgiano",
  canonical: links.servizi["trasporto-acqua"]["torgiano"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Torgiano", 
    locationNames: {label: "Torgiano", href: "torgiano"}  
});