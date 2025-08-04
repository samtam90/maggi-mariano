import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Grosseto",
  canonical: links.servizi["spurgo-fosse-biologiche"]["grosseto"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Grosseto", 
    locationNames: {label: "Grosseto", href: "grosseto"}  
});
