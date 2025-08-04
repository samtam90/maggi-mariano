import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Pratovecchio Stia",
  canonical: links.servizi["spurgo-pozzi-neri"]["pratovecchio-stia"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Pratovecchio Stia", 
    locationNames: {label: "Pratovecchio Stia", href: "pratovecchio-stia"}  
});