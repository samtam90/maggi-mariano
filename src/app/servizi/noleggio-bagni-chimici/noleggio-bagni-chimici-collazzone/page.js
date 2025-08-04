import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Collazzone",
  canonical: links.servizi["noleggio-bagni-chimici"]["collazzone"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Collazzone", 
  locationNames: {label: "Collazzone", href: "collazzone"} 
});
