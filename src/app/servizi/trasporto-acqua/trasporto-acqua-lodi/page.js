import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Lodi",
  canonical: links.servizi["trasporto-acqua"]["lodi"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Lodi", 
    locationNames: {label: "Lodi", href: "lodi"}  
});