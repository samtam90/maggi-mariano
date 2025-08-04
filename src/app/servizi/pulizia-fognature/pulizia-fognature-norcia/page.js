import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Norcia",
  canonical: links.servizi["pulizia-fognature"]["norcia"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Norcia", 
    locationNames: {label: "Norcia", href: "norcia"}  
});
