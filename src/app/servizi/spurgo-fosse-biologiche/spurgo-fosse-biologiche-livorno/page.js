import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Livorno",
  canonical: links.servizi["spurgo-fosse-biologiche"]["livorno"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Livorno", 
    locationNames: {label: "Livorno", href: "livorno"}  
});
