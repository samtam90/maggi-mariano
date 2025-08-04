import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Frosinone",
  canonical: links.servizi["trasporto-acqua"]["frosinone"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Frosinone", 
    locationNames: {label: "Frosinone", href: "frosinone"}  
});