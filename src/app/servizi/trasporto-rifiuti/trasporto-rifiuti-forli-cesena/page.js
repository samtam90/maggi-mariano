import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Forlì-Cesena",
  canonical: links.servizi["trasporto-rifiuti"]["forli-cesena"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Forlì-Cesena", 
    locationNames: {label: "Forlì-Cesena", href: "forli-cesena"}  
});