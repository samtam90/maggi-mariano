import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Savona",
  canonical: links.servizi["pulizia-fognature"]["savona"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Savona", 
    locationNames: {label: "Savona", href: "savona"}  
});
