import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Sassari",
  canonical: links.servizi["spurgo-fosse-biologiche"]["sassari"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Sassari", 
    locationNames: {label: "Sassari", href: "sassari"}  
});
