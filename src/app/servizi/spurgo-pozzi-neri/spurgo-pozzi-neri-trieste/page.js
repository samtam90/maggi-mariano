import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Trieste",
  canonical: links.servizi["spurgo-pozzi-neri"]["trieste"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Trieste", 
    locationNames: {label: "Trieste", href: "trieste"}  
});