import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Preci",
  canonical: links.servizi["trasporto-acqua"]["preci"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Preci", 
    locationNames: {label: "Preci", href: "preci"}  
});