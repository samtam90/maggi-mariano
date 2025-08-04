import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Chiusi della Verna",
  canonical: links.servizi["spurgo-fosse-biologiche"]["chiusi-della-verna"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Chiusi della Verna", 
    locationNames: {label: "Chiusi della Verna", href: "chiusi-della-verna"}  
});
