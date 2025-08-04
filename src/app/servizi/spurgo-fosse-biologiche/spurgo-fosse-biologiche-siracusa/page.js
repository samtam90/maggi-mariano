import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Siracusa",
  canonical: links.servizi["spurgo-fosse-biologiche"]["siracusa"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Siracusa", 
    locationNames: {label: "Siracusa", href: "siracusa"}  
});
