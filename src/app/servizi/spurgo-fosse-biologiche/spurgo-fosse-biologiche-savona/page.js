import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Savona",
  canonical: links.servizi["spurgo-fosse-biologiche"]["savona"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Savona", 
    locationNames: {label: "Savona", href: "savona"}  
});
