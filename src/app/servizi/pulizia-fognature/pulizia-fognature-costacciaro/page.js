import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Costacciaro",
  canonical: links.servizi["pulizia-fognature"]["costacciaro"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Costacciaro", 
    locationNames: {label: "Costacciaro", href: "costacciaro"}  
});
