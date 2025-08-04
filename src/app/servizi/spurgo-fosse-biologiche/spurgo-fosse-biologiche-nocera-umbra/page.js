import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Nocera Umbra",
  canonical: links.servizi["spurgo-fosse-biologiche"]["nocera-umbra"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Nocera Umbra", 
    locationNames: {label: "Nocera Umbra", href: "nocera-umbra"}  
});
