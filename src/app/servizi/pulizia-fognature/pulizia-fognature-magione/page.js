import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Magione",
  canonical: links.servizi["pulizia-fognature"]["magione"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Magione", 
    locationNames: {label: "Magione", href: "magione"}  
});
