import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Marciano della Chiana",
  canonical: links.servizi["spurgo-pozzi-neri"]["marciano-della-chiana"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Marciano della Chiana", 
    locationNames: {label: "Marciano della Chiana", href: "marciano-della-chiana"}  
});