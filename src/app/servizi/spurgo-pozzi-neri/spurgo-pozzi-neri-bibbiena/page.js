import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Bibbiena",
  canonical: links.servizi["spurgo-pozzi-neri"]["bibbiena"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Bibbiena", 
    locationNames: {label: "Bibbiena", href: "bibbiena"}  
});