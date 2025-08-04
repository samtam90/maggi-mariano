import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Ogliastra",
  canonical: links.servizi["pulizia-fognature"]["ogliastra"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Ogliastra", 
    locationNames: {label: "Ogliastra", href: "ogliastra"}  
});
