import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Vicenza",
  canonical: links.servizi["pulizia-fognature"]["vicenza"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Vicenza", 
    locationNames: {label: "Vicenza", href: "vicenza"}  
});
