import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Castelfiorentino",
  canonical: links.servizi["spurgo-fosse-biologiche"]["castelfiorentino"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Castelfiorentino", 
    locationNames: {label: "Castelfiorentino", href: "castelfiorentino"}  
});
