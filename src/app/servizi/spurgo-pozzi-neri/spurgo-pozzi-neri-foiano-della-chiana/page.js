import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Foiano della Chiana",
  canonical: links.servizi["spurgo-pozzi-neri"]["foiano-della-chiana"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Foiano della Chiana", 
    locationNames: {label: "Foiano della Chiana", href: "foiano-della-chiana"}  
});