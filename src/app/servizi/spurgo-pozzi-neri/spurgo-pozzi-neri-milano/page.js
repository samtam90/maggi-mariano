import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Milano",
  canonical: links.servizi["spurgo-pozzi-neri"]["milano"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Milano", 
    locationNames: {label: "Milano", href: "milano"}  
});