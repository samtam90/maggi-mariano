import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Cascia",
  canonical: links.servizi["pulizia-fognature"]["cascia"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Cascia", 
    locationNames: {label: "Cascia", href: "cascia"}  
});
