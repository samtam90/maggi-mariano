import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Marradi",
  canonical: links.servizi["pulizia-fognature"]["marradi"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Marradi", 
    locationNames: {label: "Marradi", href: "marradi"}  
});
