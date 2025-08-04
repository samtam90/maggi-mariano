import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Siena",
  canonical: links.servizi["noleggio-bagni-chimici"]["siena"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Siena", 
  locationNames: {label: "Siena", href: "siena"} 
});
