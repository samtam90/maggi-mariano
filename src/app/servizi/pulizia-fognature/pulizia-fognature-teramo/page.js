import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Teramo",
  canonical: links.servizi["pulizia-fognature"]["teramo"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Teramo", 
    locationNames: {label: "Teramo", href: "teramo"}  
});
