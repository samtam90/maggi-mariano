import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Londa",
  canonical: links.servizi["trasporto-acqua"]["londa"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Londa", 
    locationNames: {label: "Londa", href: "londa"}  
});