import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Monteleone di Spoleto",
  canonical: links.servizi["spurgo-fosse-biologiche"]["monteleone-di-spoleto"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Monteleone di Spoleto", 
    locationNames: {label: "Monteleone di Spoleto", href: "monteleone-di-spoleto"}  
});
