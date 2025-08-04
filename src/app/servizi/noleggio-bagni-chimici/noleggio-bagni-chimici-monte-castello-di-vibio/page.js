import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Monte Castello di Vibio",
  canonical: links.servizi["noleggio-bagni-chimici"]["monte-castello-di-vibio"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Monte Castello di Vibio", 
  locationNames: {label: "Monte Castello di Vibio", href: "monte-castello-di-vibio"} 
});
