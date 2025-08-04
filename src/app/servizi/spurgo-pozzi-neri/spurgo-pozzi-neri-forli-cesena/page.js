import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Forlì-Cesena",
  canonical: links.servizi["spurgo-pozzi-neri"]["forli-cesena"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Forlì-Cesena", 
    locationNames: {label: "Forlì-Cesena", href: "forli-cesena"}  
});