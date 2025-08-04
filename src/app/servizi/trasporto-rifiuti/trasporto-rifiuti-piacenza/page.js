import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Piacenza",
  canonical: links.servizi["trasporto-rifiuti"]["piacenza"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Piacenza", 
    locationNames: {label: "Piacenza", href: "piacenza"}  
});