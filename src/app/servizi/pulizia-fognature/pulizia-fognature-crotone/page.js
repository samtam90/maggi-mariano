import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Crotone",
  canonical: links.servizi["pulizia-fognature"]["crotone"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Crotone", 
    locationNames: {label: "Crotone", href: "crotone"}  
});
