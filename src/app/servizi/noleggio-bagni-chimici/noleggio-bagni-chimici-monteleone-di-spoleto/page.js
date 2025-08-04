import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Monteleone di Spoleto",
  canonical: links.servizi["noleggio-bagni-chimici"]["monteleone-di-spoleto"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Monteleone di Spoleto", 
  locationNames: {label: "Monteleone di Spoleto", href: "monteleone-di-spoleto"} 
});
