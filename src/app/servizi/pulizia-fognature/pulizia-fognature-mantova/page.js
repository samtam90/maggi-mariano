import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Mantova",
  canonical: links.servizi["pulizia-fognature"]["mantova"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Mantova", 
    locationNames: {label: "Mantova", href: "mantova"}  
});
