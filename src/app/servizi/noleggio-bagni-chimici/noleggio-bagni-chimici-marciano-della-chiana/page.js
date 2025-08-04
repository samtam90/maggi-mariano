import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Marciano della Chiana",
  canonical: links.servizi["noleggio-bagni-chimici"]["marciano-della-chiana"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Marciano della Chiana", 
  locationNames: {label: "Marciano della Chiana", href: "marciano-della-chiana"} 
});
