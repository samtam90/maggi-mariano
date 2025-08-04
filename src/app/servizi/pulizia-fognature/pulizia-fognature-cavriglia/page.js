import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Cavriglia",
  canonical: links.servizi["pulizia-fognature"]["cavriglia"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Cavriglia", 
    locationNames: {label: "Cavriglia", href: "cavriglia"}  
});
