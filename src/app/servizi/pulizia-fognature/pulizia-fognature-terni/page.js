import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Terni",
  canonical: links.servizi["pulizia-fognature"]["terni"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Terni", 
    locationNames: {label: "Terni", href: "terni"}  
});
