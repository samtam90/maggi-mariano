import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Chieti",
  canonical: links.servizi["noleggio-bagni-chimici"]["chieti"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Chieti", 
  locationNames: {label: "Chieti", href: "chieti"} 
});
