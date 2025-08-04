import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Monterchi",
  canonical: links.servizi["trasporto-acqua"]["monterchi"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Monterchi", 
    locationNames: {label: "Monterchi", href: "monterchi"}  
});