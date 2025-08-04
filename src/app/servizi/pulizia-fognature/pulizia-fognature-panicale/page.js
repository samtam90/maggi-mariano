import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Panicale",
  canonical: links.servizi["pulizia-fognature"]["panicale"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Panicale", 
    locationNames: {label: "Panicale", href: "panicale"}  
});
