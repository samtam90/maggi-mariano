import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Ancona",
  canonical: links.servizi["spurgo-fosse-biologiche"]["ancona"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Ancona", 
    locationNames: {label: "Ancona", href: "ancona"}  
});
