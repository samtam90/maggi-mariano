import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Massa Martana",
  canonical: links.servizi["pulizia-fognature"]["massa-martana"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Massa Martana", 
    locationNames: {label: "Massa Martana", href: "massa-martana"}  
});
