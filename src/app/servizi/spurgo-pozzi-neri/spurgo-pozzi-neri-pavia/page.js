import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Pavia",
  canonical: links.servizi["spurgo-pozzi-neri"]["pavia"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Pavia", 
    locationNames: {label: "Pavia", href: "pavia"}  
});