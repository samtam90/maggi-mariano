import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Piacenza",
  canonical: links.servizi["trasporto-acqua"]["piacenza"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Piacenza", 
    locationNames: {label: "Piacenza", href: "piacenza"}  
});