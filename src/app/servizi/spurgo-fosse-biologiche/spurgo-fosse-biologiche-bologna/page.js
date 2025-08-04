import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Bologna",
  canonical: links.servizi["spurgo-fosse-biologiche"]["bologna"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Bologna", 
    locationNames: {label: "Bologna", href: "bologna"}  
});
