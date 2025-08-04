import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Monteleone di Spoleto",
  canonical: links.servizi["pulizia-fognature"]["monteleone-di-spoleto"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Monteleone di Spoleto", 
    locationNames: {label: "Monteleone di Spoleto", href: "monteleone-di-spoleto"}  
});
