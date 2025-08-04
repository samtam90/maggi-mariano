import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Bettona",
  canonical: links.servizi["spurgo-fosse-biologiche"]["bettona"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Bettona", 
    locationNames: {label: "Bettona", href: "bettona"}  
});
