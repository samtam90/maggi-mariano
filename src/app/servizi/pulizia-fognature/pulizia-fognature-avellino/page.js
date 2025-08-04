import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Avellino",
  canonical: links.servizi["pulizia-fognature"]["avellino"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Avellino", 
    locationNames: {label: "Avellino", href: "avellino"}  
});
