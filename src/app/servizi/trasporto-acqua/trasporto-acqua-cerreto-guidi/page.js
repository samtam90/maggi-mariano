import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Cerreto Guidi",
  canonical: links.servizi["trasporto-acqua"]["cerreto-guidi"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Cerreto Guidi", 
    locationNames: {label: "Cerreto Guidi", href: "cerreto-guidi"}  
});