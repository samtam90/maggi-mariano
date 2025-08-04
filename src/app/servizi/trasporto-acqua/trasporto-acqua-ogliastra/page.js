import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Ogliastra",
  canonical: links.servizi["trasporto-acqua"]["ogliastra"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Ogliastra", 
    locationNames: {label: "Ogliastra", href: "ogliastra"}  
});