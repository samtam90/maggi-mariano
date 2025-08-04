import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Catanzaro",
  canonical: links.servizi["noleggio-bagni-chimici"]["catanzaro"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Catanzaro", 
  locationNames: {label: "Catanzaro", href: "catanzaro"} 
});
