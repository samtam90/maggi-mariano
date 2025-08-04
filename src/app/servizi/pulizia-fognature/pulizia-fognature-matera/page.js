import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Matera",
  canonical: links.servizi["pulizia-fognature"]["matera"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Matera", 
    locationNames: {label: "Matera", href: "matera"}  
});
