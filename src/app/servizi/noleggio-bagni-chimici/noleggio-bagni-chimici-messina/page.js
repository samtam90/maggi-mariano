import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Messina",
  canonical: links.servizi["noleggio-bagni-chimici"]["messina"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Messina", 
  locationNames: {label: "Messina", href: "messina"} 
});
