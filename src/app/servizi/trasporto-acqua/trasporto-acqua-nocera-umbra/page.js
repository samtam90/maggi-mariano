import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Nocera Umbra",
  canonical: links.servizi["trasporto-acqua"]["nocera-umbra"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Nocera Umbra", 
    locationNames: {label: "Nocera Umbra", href: "nocera-umbra"}  
});