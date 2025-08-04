import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Civitella in Valdichiana",
  canonical: links.servizi["spurgo-pozzi-neri"]["civitella-in-valdichiana"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Civitella in Valdichiana", 
    locationNames: {label: "Civitella in Valdichiana", href: "civitella-in-valdichiana"}  
});