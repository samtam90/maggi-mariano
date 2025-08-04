import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Torino",
  canonical: links.servizi["noleggio-bagni-chimici"]["torino"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Torino", 
  locationNames: {label: "Torino", href: "torino"} 
});
