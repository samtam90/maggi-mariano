import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Oristano",
  canonical: links.servizi["spurgo-pozzi-neri"]["oristano"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Oristano", 
    locationNames: {label: "Oristano", href: "oristano"}  
});