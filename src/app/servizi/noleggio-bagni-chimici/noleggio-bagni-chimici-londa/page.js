import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Londa",
  canonical: links.servizi["noleggio-bagni-chimici"]["londa"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Londa", 
  locationNames: {label: "Londa", href: "londa"} 
});
