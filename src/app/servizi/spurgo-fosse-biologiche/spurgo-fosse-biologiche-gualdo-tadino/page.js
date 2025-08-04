import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Gualdo Tadino",
  canonical: links.servizi["spurgo-fosse-biologiche"]["gualdo-tadino"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Gualdo Tadino", 
    locationNames: {label: "Gualdo Tadino", href: "gualdo-tadino"}  
});
