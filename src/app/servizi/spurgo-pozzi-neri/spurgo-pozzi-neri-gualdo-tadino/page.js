import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Gualdo Tadino",
  canonical: links.servizi["spurgo-pozzi-neri"]["gualdo-tadino"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Gualdo Tadino", 
    locationNames: {label: "Gualdo Tadino", href: "gualdo-tadino"}  
});