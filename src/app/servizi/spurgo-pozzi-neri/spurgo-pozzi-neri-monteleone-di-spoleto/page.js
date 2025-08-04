import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Monteleone di Spoleto",
  canonical: links.servizi["spurgo-pozzi-neri"]["monteleone-di-spoleto"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Monteleone di Spoleto", 
    locationNames: {label: "Monteleone di Spoleto", href: "monteleone-di-spoleto"}  
});