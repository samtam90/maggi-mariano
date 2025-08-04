import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Trieste",
  canonical: links.servizi["pulizia-fognature"]["trieste"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Trieste", 
    locationNames: {label: "Trieste", href: "trieste"}  
});
