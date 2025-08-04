import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Piacenza",
  canonical: links.servizi["noleggio-bagni-chimici"]["piacenza"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Piacenza", 
  locationNames: {label: "Piacenza", href: "piacenza"} 
});
