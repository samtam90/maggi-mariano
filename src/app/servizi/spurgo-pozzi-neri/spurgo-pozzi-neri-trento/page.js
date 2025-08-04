import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Trento",
  canonical: links.servizi["spurgo-pozzi-neri"]["trento"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Trento", 
    locationNames: {label: "Trento", href: "trento"}  
});