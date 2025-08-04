import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Brescia",
  canonical: links.servizi["trasporto-acqua"]["brescia"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Brescia", 
    locationNames: {label: "Brescia", href: "brescia"}  
});