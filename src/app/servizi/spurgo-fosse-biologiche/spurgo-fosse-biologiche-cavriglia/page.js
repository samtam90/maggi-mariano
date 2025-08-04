import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Cavriglia",
  canonical: links.servizi["spurgo-fosse-biologiche"]["cavriglia"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Cavriglia", 
    locationNames: {label: "Cavriglia", href: "cavriglia"}  
});
