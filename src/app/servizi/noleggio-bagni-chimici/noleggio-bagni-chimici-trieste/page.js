import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Trieste",
  canonical: links.servizi["noleggio-bagni-chimici"]["trieste"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Trieste", 
  locationNames: {label: "Trieste", href: "trieste"} 
});
