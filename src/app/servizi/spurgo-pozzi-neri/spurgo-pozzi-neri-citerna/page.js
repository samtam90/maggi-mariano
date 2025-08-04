import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Citerna",
  canonical: links.servizi["spurgo-pozzi-neri"]["citerna"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Citerna", 
    locationNames: {label: "Citerna", href: "citerna"}  
});