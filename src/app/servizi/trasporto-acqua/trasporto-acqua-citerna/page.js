import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Citerna",
  canonical: links.servizi["trasporto-acqua"]["citerna"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Citerna", 
    locationNames: {label: "Citerna", href: "citerna"}  
});