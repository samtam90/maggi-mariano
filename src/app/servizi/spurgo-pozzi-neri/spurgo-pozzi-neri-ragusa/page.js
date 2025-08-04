import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Ragusa",
  canonical: links.servizi["spurgo-pozzi-neri"]["ragusa"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Ragusa", 
    locationNames: {label: "Ragusa", href: "ragusa"}  
});