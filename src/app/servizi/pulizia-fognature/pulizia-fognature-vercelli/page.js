import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Vercelli",
  canonical: links.servizi["pulizia-fognature"]["vercelli"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Vercelli", 
    locationNames: {label: "Vercelli", href: "vercelli"}  
});
