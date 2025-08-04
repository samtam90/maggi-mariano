import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Brindisi",
  canonical: links.servizi["pulizia-fognature"]["brindisi"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Brindisi", 
    locationNames: {label: "Brindisi", href: "brindisi"}  
});
