import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Spello",
  canonical: links.servizi["noleggio-bagni-chimici"]["spello"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Spello", 
  locationNames: {label: "Spello", href: "spello"} 
});
