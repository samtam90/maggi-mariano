import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Agrigento",
  canonical: links.servizi["noleggio-bagni-chimici"]["agrigento"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Agrigento", 
  locationNames: {label: "Agrigento", href: "agrigento"} 
});
