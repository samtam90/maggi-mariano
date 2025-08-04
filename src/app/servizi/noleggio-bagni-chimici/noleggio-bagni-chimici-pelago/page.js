import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Pelago",
  canonical: links.servizi["noleggio-bagni-chimici"]["pelago"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Pelago", 
  locationNames: {label: "Pelago", href: "pelago"} 
});
