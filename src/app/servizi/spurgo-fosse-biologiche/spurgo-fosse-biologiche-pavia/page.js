import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Pavia",
  canonical: links.servizi["spurgo-fosse-biologiche"]["pavia"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Pavia", 
    locationNames: {label: "Pavia", href: "pavia"}  
});
