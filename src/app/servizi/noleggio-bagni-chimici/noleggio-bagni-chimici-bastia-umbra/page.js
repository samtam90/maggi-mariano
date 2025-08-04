import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Bastia Umbra",
  canonical: links.servizi["noleggio-bagni-chimici"]["bastia-umbra"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Bastia Umbra", 
  locationNames: {label: "Bastia Umbra", href: "bastia-umbra"} 
});
