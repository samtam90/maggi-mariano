import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Gubbio",
  canonical: links.servizi["noleggio-bagni-chimici"]["gubbio"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Gubbio", 
  locationNames: {label: "Gubbio", href: "gubbio"} 
});
