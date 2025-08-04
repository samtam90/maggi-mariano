import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Cannara",
  canonical: links.servizi["spurgo-fosse-biologiche"]["cannara"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Cannara", 
    locationNames: {label: "Cannara", href: "cannara"}  
});
