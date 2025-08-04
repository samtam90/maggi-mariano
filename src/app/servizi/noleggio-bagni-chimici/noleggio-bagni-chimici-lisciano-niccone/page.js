import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Lisciano Niccone",
  canonical: links.servizi["noleggio-bagni-chimici"]["lisciano-niccone"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Lisciano Niccone", 
  locationNames: {label: "Lisciano Niccone", href: "lisciano-niccone"} 
});
