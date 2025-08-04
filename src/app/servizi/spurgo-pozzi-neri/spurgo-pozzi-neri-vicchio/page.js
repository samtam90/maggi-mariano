import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Vicchio",
  canonical: links.servizi["spurgo-pozzi-neri"]["vicchio"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Vicchio", 
    locationNames: {label: "Vicchio", href: "vicchio"}  
});