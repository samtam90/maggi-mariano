import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Vicenza",
  canonical: links.servizi["noleggio-bagni-chimici"]["vicenza"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Vicenza", 
  locationNames: {label: "Vicenza", href: "vicenza"} 
});
