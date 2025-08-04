import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Bastia Umbra",
  canonical: links.servizi["spurgo-pozzi-neri"]["bastia-umbra"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Bastia Umbra", 
    locationNames: {label: "Bastia Umbra", href: "bastia-umbra"}  
});