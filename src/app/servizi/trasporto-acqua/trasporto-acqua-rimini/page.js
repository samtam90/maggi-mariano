import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Rimini",
  canonical: links.servizi["trasporto-acqua"]["rimini"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Rimini", 
    locationNames: {label: "Rimini", href: "rimini"}  
});