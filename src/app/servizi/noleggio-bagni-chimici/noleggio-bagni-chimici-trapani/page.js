import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Trapani",
  canonical: links.servizi["noleggio-bagni-chimici"]["trapani"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Trapani", 
  locationNames: {label: "Trapani", href: "trapani"} 
});
