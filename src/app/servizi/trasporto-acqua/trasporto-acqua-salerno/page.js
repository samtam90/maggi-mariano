import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Salerno",
  canonical: links.servizi["trasporto-acqua"]["salerno"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Salerno", 
    locationNames: {label: "Salerno", href: "salerno"}  
});