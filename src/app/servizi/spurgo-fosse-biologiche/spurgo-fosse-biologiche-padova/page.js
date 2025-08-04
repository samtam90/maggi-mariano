import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Padova",
  canonical: links.servizi["spurgo-fosse-biologiche"]["padova"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Padova", 
    locationNames: {label: "Padova", href: "padova"}  
});
