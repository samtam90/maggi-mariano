import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Talla",
  canonical: links.servizi["pulizia-fognature"]["talla"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Talla", 
    locationNames: {label: "Talla", href: "talla"}  
});
