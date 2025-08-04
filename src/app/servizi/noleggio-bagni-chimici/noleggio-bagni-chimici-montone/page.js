import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Montone",
  canonical: links.servizi["noleggio-bagni-chimici"]["montone"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Montone", 
  locationNames: {label: "Montone", href: "montone"} 
});
