import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Teramo",
  canonical: links.servizi["spurgo-fosse-biologiche"]["teramo"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Teramo", 
    locationNames: {label: "Teramo", href: "teramo"}  
});
