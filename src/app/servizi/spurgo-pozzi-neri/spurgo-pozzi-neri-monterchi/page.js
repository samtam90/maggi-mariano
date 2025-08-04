import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Monterchi",
  canonical: links.servizi["spurgo-pozzi-neri"]["monterchi"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Monterchi", 
    locationNames: {label: "Monterchi", href: "monterchi"}  
});