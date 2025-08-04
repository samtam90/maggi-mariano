import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Castel Focognano",
  canonical: links.servizi["spurgo-fosse-biologiche"]["castel-focognano"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Castel Focognano", 
    locationNames: {label: "Castel Focognano", href: "castel-focognano"}  
});
