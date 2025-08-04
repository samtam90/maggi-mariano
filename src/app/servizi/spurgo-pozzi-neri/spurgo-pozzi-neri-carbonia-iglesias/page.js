import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Carbonia Iglesias",
  canonical: links.servizi["spurgo-pozzi-neri"]["carbonia-iglesias"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Carbonia Iglesias", 
    locationNames: {label: "Carbonia Iglesias", href: "carbonia-iglesias"}  
});