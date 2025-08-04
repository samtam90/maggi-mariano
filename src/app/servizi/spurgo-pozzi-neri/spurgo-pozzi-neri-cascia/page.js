import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Cascia",
  canonical: links.servizi["spurgo-pozzi-neri"]["cascia"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Cascia", 
    locationNames: {label: "Cascia", href: "cascia"}  
});