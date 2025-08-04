import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Chiusi della Verna",
  canonical: links.servizi["pulizia-fognature"]["chiusi-della-verna"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Chiusi della Verna", 
    locationNames: {label: "Chiusi della Verna", href: "chiusi-della-verna"}  
});
