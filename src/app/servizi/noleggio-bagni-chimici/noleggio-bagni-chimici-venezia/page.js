import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Venezia",
  canonical: links.servizi["noleggio-bagni-chimici"]["venezia"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Venezia", 
  locationNames: {label: "Venezia", href: "venezia"} 
});
