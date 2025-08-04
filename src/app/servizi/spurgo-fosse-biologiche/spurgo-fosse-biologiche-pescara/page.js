import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Pescara",
  canonical: links.servizi["spurgo-fosse-biologiche"]["pescara"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Pescara", 
    locationNames: {label: "Pescara", href: "pescara"}  
});
