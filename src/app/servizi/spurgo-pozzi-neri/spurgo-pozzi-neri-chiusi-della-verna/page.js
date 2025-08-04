import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Chiusi della Verna",
  canonical: links.servizi["spurgo-pozzi-neri"]["chiusi-della-verna"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Chiusi della Verna", 
    locationNames: {label: "Chiusi della Verna", href: "chiusi-della-verna"}  
});