import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Torino",
  canonical: links.servizi["pulizia-fognature"]["torino"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Torino", 
    locationNames: {label: "Torino", href: "torino"}  
});
