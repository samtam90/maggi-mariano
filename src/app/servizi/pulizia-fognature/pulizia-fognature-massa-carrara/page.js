import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Massa-Carrara",
  canonical: links.servizi["pulizia-fognature"]["massa-carrara"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Massa-Carrara", 
    locationNames: {label: "Massa-Carrara", href: "massa-carrara"}  
});
