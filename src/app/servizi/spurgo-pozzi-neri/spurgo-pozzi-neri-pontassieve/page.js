import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Pontassieve",
  canonical: links.servizi["spurgo-pozzi-neri"]["pontassieve"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Pontassieve", 
    locationNames: {label: "Pontassieve", href: "pontassieve"}  
});