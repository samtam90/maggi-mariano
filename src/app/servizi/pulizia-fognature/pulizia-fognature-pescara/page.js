import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Pescara",
  canonical: links.servizi["pulizia-fognature"]["pescara"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Pescara", 
    locationNames: {label: "Pescara", href: "pescara"}  
});
