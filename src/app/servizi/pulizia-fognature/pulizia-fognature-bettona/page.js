import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Bettona",
  canonical: links.servizi["pulizia-fognature"]["bettona"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Bettona", 
    locationNames: {label: "Bettona", href: "bettona"}  
});
