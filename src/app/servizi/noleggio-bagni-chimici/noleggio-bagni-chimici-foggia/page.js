import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Foggia",
  canonical: links.servizi["noleggio-bagni-chimici"]["foggia"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Foggia", 
  locationNames: {label: "Foggia", href: "foggia"} 
});
