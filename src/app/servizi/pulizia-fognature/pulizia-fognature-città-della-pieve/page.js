import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Città della Pieve",
  canonical: links.servizi["pulizia-fognature"]["città-della-pieve"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Città della Pieve", 
    locationNames: {label: "Città della Pieve", href: "città-della-pieve"}  
});
