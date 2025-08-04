import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Fucecchio",
  canonical: links.servizi["pulizia-fognature"]["fucecchio"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Fucecchio", 
    locationNames: {label: "Fucecchio", href: "fucecchio"}  
});
