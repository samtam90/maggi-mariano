import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Montone",
  canonical: links.servizi["spurgo-pozzi-neri"]["montone"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Montone", 
    locationNames: {label: "Montone", href: "montone"}  
});