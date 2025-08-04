import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Terni",
  canonical: links.servizi["spurgo-fosse-biologiche"]["terni"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Terni", 
    locationNames: {label: "Terni", href: "terni"}  
});
