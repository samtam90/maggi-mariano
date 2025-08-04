import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Reggello",
  canonical: links.servizi["trasporto-acqua"]["reggello"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Reggello", 
    locationNames: {label: "Reggello", href: "reggello"}  
});