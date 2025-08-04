import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Reggio Emilia",
  canonical: links.servizi["noleggio-bagni-chimici"]["reggio-emilia"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Reggio Emilia", 
  locationNames: {label: "Reggio Emilia", href: "reggio-emilia"} 
});
