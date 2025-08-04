import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Treviso",
  canonical: links.servizi["noleggio-bagni-chimici"]["treviso"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Treviso", 
  locationNames: {label: "Treviso", href: "treviso"} 
});
