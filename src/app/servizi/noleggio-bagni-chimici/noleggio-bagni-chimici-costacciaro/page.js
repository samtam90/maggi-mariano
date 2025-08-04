import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Costacciaro",
  canonical: links.servizi["noleggio-bagni-chimici"]["costacciaro"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Costacciaro", 
  locationNames: {label: "Costacciaro", href: "costacciaro"} 
});
