import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Costacciaro",
  canonical: links.servizi["spurgo-pozzi-neri"]["costacciaro"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Costacciaro", 
    locationNames: {label: "Costacciaro", href: "costacciaro"}  
});