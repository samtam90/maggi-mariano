import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Sassari",
  canonical: links.servizi["spurgo-pozzi-neri"]["sassari"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Sassari", 
    locationNames: {label: "Sassari", href: "sassari"}  
});