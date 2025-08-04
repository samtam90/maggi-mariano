import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Novara",
  canonical: links.servizi["pulizia-fognature"]["novara"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Novara", 
    locationNames: {label: "Novara", href: "novara"}  
});
