import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Montone",
  canonical: links.servizi["spurgo-fosse-biologiche"]["montone"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Montone", 
    locationNames: {label: "Montone", href: "montone"}  
});
