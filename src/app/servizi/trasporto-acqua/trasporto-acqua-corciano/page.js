import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Corciano",
  canonical: links.servizi["trasporto-acqua"]["corciano"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Corciano", 
    locationNames: {label: "Corciano", href: "corciano"}  
});