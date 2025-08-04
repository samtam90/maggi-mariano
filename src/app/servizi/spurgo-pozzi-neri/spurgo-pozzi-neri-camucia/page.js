import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Camucia",
  canonical: links.servizi["spurgo-pozzi-neri"]["camucia"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Camucia", 
    locationNames: {label: "Camucia", href: "camucia"}  
});