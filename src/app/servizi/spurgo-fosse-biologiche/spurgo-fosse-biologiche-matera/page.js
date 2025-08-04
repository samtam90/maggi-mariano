import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Matera",
  canonical: links.servizi["spurgo-fosse-biologiche"]["matera"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Matera", 
    locationNames: {label: "Matera", href: "matera"}  
});
