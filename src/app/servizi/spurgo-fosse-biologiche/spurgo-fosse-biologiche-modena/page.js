import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Modena",
  canonical: links.servizi["spurgo-fosse-biologiche"]["modena"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Modena", 
    locationNames: {label: "Modena", href: "modena"}  
});
