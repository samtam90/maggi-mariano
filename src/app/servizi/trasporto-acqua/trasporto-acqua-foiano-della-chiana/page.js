import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Foiano della Chiana",
  canonical: links.servizi["trasporto-acqua"]["foiano-della-chiana"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Foiano della Chiana", 
    locationNames: {label: "Foiano della Chiana", href: "foiano-della-chiana"}  
});