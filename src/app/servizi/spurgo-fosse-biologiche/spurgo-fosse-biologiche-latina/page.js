import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Latina",
  canonical: links.servizi["spurgo-fosse-biologiche"]["latina"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Latina", 
    locationNames: {label: "Latina", href: "latina"}  
});
