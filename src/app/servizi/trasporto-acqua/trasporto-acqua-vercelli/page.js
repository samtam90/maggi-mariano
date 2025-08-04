import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Vercelli",
  canonical: links.servizi["trasporto-acqua"]["vercelli"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Vercelli", 
    locationNames: {label: "Vercelli", href: "vercelli"}  
});