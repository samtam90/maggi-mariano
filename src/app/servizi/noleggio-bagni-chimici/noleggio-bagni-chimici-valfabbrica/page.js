import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Valfabbrica",
  canonical: links.servizi["noleggio-bagni-chimici"]["valfabbrica"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Valfabbrica", 
  locationNames: {label: "Valfabbrica", href: "valfabbrica"} 
});
