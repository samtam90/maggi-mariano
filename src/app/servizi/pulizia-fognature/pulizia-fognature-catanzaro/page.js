import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Catanzaro",
  canonical: links.servizi["pulizia-fognature"]["catanzaro"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Catanzaro", 
    locationNames: {label: "Catanzaro", href: "catanzaro"}  
});
