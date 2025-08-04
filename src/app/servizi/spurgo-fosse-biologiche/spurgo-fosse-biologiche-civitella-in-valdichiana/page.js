import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Civitella in Valdichiana",
  canonical: links.servizi["spurgo-fosse-biologiche"]["civitella-in-valdichiana"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Civitella in Valdichiana", 
    locationNames: {label: "Civitella in Valdichiana", href: "civitella-in-valdichiana"}  
});
