import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Lecce",
  canonical: links.servizi["noleggio-bagni-chimici"]["lecce"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Lecce", 
  locationNames: {label: "Lecce", href: "lecce"} 
});
