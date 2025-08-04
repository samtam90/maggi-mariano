import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Castel Focognano",
  canonical: links.servizi["pulizia-fognature"]["castel-focognano"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Castel Focognano", 
    locationNames: {label: "Castel Focognano", href: "castel-focognano"}  
});
