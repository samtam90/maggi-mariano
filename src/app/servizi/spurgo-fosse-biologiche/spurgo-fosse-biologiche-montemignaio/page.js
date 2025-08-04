import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Montemignaio",
  canonical: links.servizi["spurgo-fosse-biologiche"]["montemignaio"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Montemignaio", 
    locationNames: {label: "Montemignaio", href: "montemignaio"}  
});
