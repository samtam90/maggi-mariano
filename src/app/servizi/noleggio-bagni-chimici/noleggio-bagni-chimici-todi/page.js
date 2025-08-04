import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Todi",
  canonical: links.servizi["noleggio-bagni-chimici"]["todi"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Todi", 
  locationNames: {label: "Todi", href: "todi"} 
});
