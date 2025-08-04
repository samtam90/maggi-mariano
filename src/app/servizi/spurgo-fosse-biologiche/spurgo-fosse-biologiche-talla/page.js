import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Talla",
  canonical: links.servizi["spurgo-fosse-biologiche"]["talla"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Talla", 
    locationNames: {label: "Talla", href: "talla"}  
});
