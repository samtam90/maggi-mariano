import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Potenza",
  canonical: links.servizi["trasporto-acqua"]["potenza"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Potenza", 
    locationNames: {label: "Potenza", href: "potenza"}  
});