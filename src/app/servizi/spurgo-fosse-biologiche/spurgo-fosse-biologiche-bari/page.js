import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Bari",
  canonical: links.servizi["spurgo-fosse-biologiche"]["bari"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Bari", 
    locationNames: {label: "Bari", href: "bari"}  
});
