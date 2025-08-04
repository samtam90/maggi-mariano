import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Sassari",
  canonical: links.servizi["trasporto-acqua"]["sassari"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Sassari", 
    locationNames: {label: "Sassari", href: "sassari"}  
});