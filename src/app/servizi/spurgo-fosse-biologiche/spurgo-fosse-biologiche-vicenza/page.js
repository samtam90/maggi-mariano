import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Vicenza",
  canonical: links.servizi["spurgo-fosse-biologiche"]["vicenza"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Vicenza", 
    locationNames: {label: "Vicenza", href: "vicenza"}  
});
