import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Verona",
  canonical: links.servizi["spurgo-fosse-biologiche"]["verona"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Verona", 
    locationNames: {label: "Verona", href: "verona"}  
});
