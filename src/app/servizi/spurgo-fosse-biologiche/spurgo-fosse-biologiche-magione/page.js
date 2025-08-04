import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Magione",
  canonical: links.servizi["spurgo-fosse-biologiche"]["magione"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Magione", 
    locationNames: {label: "Magione", href: "magione"}  
});
