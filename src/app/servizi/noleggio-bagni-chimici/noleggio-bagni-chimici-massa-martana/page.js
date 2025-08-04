import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Massa Martana",
  canonical: links.servizi["noleggio-bagni-chimici"]["massa-martana"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Massa Martana", 
  locationNames: {label: "Massa Martana", href: "massa-martana"} 
});
