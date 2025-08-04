import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Norcia",
  canonical: links.servizi["trasporto-acqua"]["norcia"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Norcia", 
    locationNames: {label: "Norcia", href: "norcia"}  
});