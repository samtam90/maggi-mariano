import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Civitella in Valdichiana",
  canonical: links.servizi["pulizia-fognature"]["civitella-in-valdichiana"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Civitella in Valdichiana", 
    locationNames: {label: "Civitella in Valdichiana", href: "civitella-in-valdichiana"}  
});
