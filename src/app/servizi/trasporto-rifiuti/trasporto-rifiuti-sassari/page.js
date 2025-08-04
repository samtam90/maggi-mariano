import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Sassari",
  canonical: links.servizi["trasporto-rifiuti"]["sassari"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Sassari", 
    locationNames: {label: "Sassari", href: "sassari"}  
});