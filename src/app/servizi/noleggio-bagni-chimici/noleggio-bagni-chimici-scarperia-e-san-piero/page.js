import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Scarperia e San Piero",
  canonical: links.servizi["noleggio-bagni-chimici"]["scarperia-e-san-piero"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Scarperia e San Piero", 
  locationNames: {label: "Scarperia e San Piero", href: "scarperia-e-san-piero"} 
});
