import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Assisi",
  canonical: links.servizi["spurgo-pozzi-neri"]["assisi"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Assisi", 
    locationNames: {label: "Assisi", href: "assisi"}  
});