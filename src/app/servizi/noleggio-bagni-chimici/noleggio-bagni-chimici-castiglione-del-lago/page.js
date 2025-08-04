import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Castiglione del Lago",
  canonical: links.servizi["noleggio-bagni-chimici"]["castiglione-del-lago"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Castiglione del Lago", 
  locationNames: {label: "Castiglione del Lago", href: "castiglione-del-lago"} 
});
