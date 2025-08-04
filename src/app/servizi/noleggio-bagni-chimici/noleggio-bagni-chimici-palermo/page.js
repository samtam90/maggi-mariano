import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Palermo",
  canonical: links.servizi["noleggio-bagni-chimici"]["palermo"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Palermo", 
  locationNames: {label: "Palermo", href: "palermo"} 
});
