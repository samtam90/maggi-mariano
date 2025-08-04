import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Lodi",
  canonical: links.servizi["spurgo-fosse-biologiche"]["lodi"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Lodi", 
    locationNames: {label: "Lodi", href: "lodi"}  
});
