import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Capolona",
  canonical: links.servizi["pulizia-fognature"]["capolona"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Capolona", 
    locationNames: {label: "Capolona", href: "capolona"}  
});
