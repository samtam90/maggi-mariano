import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Panicale",
  canonical: links.servizi["noleggio-bagni-chimici"]["panicale"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Panicale", 
  locationNames: {label: "Panicale", href: "panicale"} 
});
