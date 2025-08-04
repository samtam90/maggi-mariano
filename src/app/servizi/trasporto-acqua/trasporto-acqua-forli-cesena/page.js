import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Forlì-Cesena",
  canonical: links.servizi["trasporto-acqua"]["forli-cesena"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Forlì-Cesena", 
    locationNames: {label: "Forlì-Cesena", href: "forli-cesena"}  
});