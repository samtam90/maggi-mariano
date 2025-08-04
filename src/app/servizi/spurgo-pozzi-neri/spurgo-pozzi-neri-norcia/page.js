import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Norcia",
  canonical: links.servizi["spurgo-pozzi-neri"]["norcia"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Norcia", 
    locationNames: {label: "Norcia", href: "norcia"}  
});