import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Londa",
  canonical: links.servizi["spurgo-fosse-biologiche"]["londa"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Londa", 
    locationNames: {label: "Londa", href: "londa"}  
});
