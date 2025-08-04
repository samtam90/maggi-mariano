import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Civitella in Valdichiana",
  canonical: links.servizi["trasporto-rifiuti"]["civitella-in-valdichiana"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Civitella in Valdichiana", 
    locationNames: {label: "Civitella in Valdichiana", href: "civitella-in-valdichiana"}  
});