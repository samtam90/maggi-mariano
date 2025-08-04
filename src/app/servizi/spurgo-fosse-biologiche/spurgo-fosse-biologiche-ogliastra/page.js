import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Ogliastra",
  canonical: links.servizi["spurgo-fosse-biologiche"]["ogliastra"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Ogliastra", 
    locationNames: {label: "Ogliastra", href: "ogliastra"}  
});
