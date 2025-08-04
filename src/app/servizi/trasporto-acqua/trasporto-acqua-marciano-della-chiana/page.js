import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Marciano della Chiana",
  canonical: links.servizi["trasporto-acqua"]["marciano-della-chiana"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Marciano della Chiana", 
    locationNames: {label: "Marciano della Chiana", href: "marciano-della-chiana"}  
});