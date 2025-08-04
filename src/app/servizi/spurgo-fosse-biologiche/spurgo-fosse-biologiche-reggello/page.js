import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Reggello",
  canonical: links.servizi["spurgo-fosse-biologiche"]["reggello"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Reggello", 
    locationNames: {label: "Reggello", href: "reggello"}  
});
