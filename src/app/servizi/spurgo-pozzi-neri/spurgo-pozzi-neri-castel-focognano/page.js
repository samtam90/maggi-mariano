import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Castel Focognano",
  canonical: links.servizi["spurgo-pozzi-neri"]["castel-focognano"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Castel Focognano", 
    locationNames: {label: "Castel Focognano", href: "castel-focognano"}  
});