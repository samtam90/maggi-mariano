import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Costacciaro",
  canonical: links.servizi["spurgo-fosse-biologiche"]["costacciaro"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Costacciaro", 
    locationNames: {label: "Costacciaro", href: "costacciaro"}  
});
