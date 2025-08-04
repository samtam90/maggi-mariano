import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Udine",
  canonical: links.servizi["spurgo-fosse-biologiche"]["udine"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Udine", 
    locationNames: {label: "Udine", href: "udine"}  
});
