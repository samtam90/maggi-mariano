import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Campobasso",
  canonical: links.servizi["spurgo-pozzi-neri"]["campobasso"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Campobasso", 
    locationNames: {label: "Campobasso", href: "campobasso"}  
});