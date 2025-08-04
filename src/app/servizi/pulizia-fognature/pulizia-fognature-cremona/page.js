import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Cremona",
  canonical: links.servizi["pulizia-fognature"]["cremona"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Cremona", 
    locationNames: {label: "Cremona", href: "cremona"}  
});
