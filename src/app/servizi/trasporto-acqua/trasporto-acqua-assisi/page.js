import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Assisi",
  canonical: links.servizi["trasporto-acqua"]["assisi"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Assisi", 
    locationNames: {label: "Assisi", href: "assisi"}  
});