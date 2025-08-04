import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Crotone",
  canonical: links.servizi["noleggio-bagni-chimici"]["crotone"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Crotone", 
  locationNames: {label: "Crotone", href: "crotone"} 
});
