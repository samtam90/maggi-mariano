import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Torino",
  canonical: links.servizi["spurgo-fosse-biologiche"]["torino"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Torino", 
    locationNames: {label: "Torino", href: "torino"}  
});
