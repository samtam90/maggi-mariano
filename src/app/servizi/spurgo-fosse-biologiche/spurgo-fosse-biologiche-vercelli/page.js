import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Vercelli",
  canonical: links.servizi["spurgo-fosse-biologiche"]["vercelli"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Vercelli", 
    locationNames: {label: "Vercelli", href: "vercelli"}  
});
