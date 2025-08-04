import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Potenza",
  canonical: links.servizi["spurgo-fosse-biologiche"]["potenza"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Potenza", 
    locationNames: {label: "Potenza", href: "potenza"}  
});
