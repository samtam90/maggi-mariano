import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Avellino",
  canonical: links.servizi["spurgo-fosse-biologiche"]["avellino"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Avellino", 
    locationNames: {label: "Avellino", href: "avellino"}  
});
