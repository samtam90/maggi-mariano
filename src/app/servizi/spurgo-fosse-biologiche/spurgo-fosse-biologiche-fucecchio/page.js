import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Fucecchio",
  canonical: links.servizi["spurgo-fosse-biologiche"]["fucecchio"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Fucecchio", 
    locationNames: {label: "Fucecchio", href: "fucecchio"}  
});
