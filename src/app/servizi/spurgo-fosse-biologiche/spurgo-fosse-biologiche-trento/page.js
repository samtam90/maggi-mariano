import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Trento",
  canonical: links.servizi["spurgo-fosse-biologiche"]["trento"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Trento", 
    locationNames: {label: "Trento", href: "trento"}  
});
