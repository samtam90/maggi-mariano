import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Poppi",
  canonical: links.servizi["spurgo-pozzi-neri"]["poppi"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Poppi", 
    locationNames: {label: "Poppi", href: "poppi"}  
});