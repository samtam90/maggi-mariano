import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Vercelli",
  canonical: links.servizi["noleggio-bagni-chimici"]["vercelli"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Vercelli", 
  locationNames: {label: "Vercelli", href: "vercelli"} 
});
