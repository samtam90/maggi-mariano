import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Castelfiorentino",
  canonical: links.servizi["pulizia-fognature"]["castelfiorentino"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Castelfiorentino", 
    locationNames: {label: "Castelfiorentino", href: "castelfiorentino"}  
});
