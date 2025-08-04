import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Cosenza",
  canonical: links.servizi["noleggio-bagni-chimici"]["cosenza"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Cosenza", 
  locationNames: {label: "Cosenza", href: "cosenza"} 
});
