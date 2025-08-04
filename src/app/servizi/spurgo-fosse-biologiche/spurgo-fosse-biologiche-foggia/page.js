import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Foggia",
  canonical: links.servizi["spurgo-fosse-biologiche"]["foggia"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Foggia", 
    locationNames: {label: "Foggia", href: "foggia"}  
});
