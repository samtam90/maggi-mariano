import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Cascia",
  canonical: links.servizi["spurgo-fosse-biologiche"]["cascia"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Cascia", 
    locationNames: {label: "Cascia", href: "cascia"}  
});
