import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Salerno",
  canonical: links.servizi["spurgo-pozzi-neri"]["salerno"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Salerno", 
    locationNames: {label: "Salerno", href: "salerno"}  
});