import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Foligno",
  canonical: links.servizi["spurgo-fosse-biologiche"]["foligno"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Foligno", 
    locationNames: {label: "Foligno", href: "foligno"}  
});
