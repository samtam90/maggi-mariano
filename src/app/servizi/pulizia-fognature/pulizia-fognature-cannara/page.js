import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Cannara",
  canonical: links.servizi["pulizia-fognature"]["cannara"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Cannara", 
    locationNames: {label: "Cannara", href: "cannara"}  
});
