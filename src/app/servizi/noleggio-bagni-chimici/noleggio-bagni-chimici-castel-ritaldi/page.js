import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Castel Ritaldi",
  canonical: links.servizi["noleggio-bagni-chimici"]["castel-ritaldi"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Castel Ritaldi", 
  locationNames: {label: "Castel Ritaldi", href: "castel-ritaldi"} 
});
