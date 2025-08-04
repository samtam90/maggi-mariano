import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Campobasso",
  canonical: links.servizi["pulizia-fognature"]["campobasso"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Campobasso", 
    locationNames: {label: "Campobasso", href: "campobasso"}  
});
