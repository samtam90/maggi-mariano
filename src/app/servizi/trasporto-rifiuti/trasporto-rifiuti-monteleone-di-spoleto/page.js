import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Monteleone di Spoleto",
  canonical: links.servizi["trasporto-rifiuti"]["monteleone-di-spoleto"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Monteleone di Spoleto", 
    locationNames: {label: "Monteleone di Spoleto", href: "monteleone-di-spoleto"}  
});