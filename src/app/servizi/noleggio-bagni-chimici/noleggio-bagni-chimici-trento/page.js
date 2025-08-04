import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Trento",
  canonical: links.servizi["noleggio-bagni-chimici"]["trento"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Trento", 
  locationNames: {label: "Trento", href: "trento"} 
});
