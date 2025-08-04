import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Valtopina",
  canonical: links.servizi["noleggio-bagni-chimici"]["valtopina"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Valtopina", 
  locationNames: {label: "Valtopina", href: "valtopina"} 
});
