import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Piacenza",
  canonical: links.servizi["spurgo-pozzi-neri"]["piacenza"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Piacenza", 
    locationNames: {label: "Piacenza", href: "piacenza"}  
});