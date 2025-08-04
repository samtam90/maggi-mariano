import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Cascia",
  canonical: links.servizi["trasporto-acqua"]["cascia"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Cascia", 
    locationNames: {label: "Cascia", href: "cascia"}  
});