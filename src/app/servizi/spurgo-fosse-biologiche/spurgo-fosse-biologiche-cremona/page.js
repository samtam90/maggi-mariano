import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Cremona",
  canonical: links.servizi["spurgo-fosse-biologiche"]["cremona"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Cremona", 
    locationNames: {label: "Cremona", href: "cremona"}  
});
