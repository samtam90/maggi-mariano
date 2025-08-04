import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Fucecchio",
  canonical: links.servizi["spurgo-pozzi-neri"]["fucecchio"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Fucecchio", 
    locationNames: {label: "Fucecchio", href: "fucecchio"}  
});