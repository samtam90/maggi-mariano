import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Bibbiena",
  canonical: links.servizi["spurgo-fosse-biologiche"]["bibbiena"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Bibbiena", 
    locationNames: {label: "Bibbiena", href: "bibbiena"}  
});
