import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Bari",
  canonical: links.servizi["spurgo-pozzi-neri"]["bari"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Bari", 
    locationNames: {label: "Bari", href: "bari"}  
});