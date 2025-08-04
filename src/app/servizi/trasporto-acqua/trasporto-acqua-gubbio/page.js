import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Gubbio",
  canonical: links.servizi["trasporto-acqua"]["gubbio"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Gubbio", 
    locationNames: {label: "Gubbio", href: "gubbio"}  
});