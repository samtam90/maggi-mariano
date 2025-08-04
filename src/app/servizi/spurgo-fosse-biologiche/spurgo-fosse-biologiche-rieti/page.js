import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Rieti",
  canonical: links.servizi["spurgo-fosse-biologiche"]["rieti"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Rieti", 
    locationNames: {label: "Rieti", href: "rieti"}  
});
