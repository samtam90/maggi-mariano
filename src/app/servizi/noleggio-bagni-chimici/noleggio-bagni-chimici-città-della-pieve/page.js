import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Città della Pieve",
  canonical: links.servizi["noleggio-bagni-chimici"]["città-della-pieve"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Città della Pieve", 
  locationNames: {label: "Città della Pieve", href: "città-della-pieve"} 
});
