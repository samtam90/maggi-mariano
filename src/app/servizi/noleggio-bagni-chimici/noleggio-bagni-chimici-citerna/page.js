import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Citerna",
  canonical: links.servizi["noleggio-bagni-chimici"]["citerna"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Citerna", 
  locationNames: {label: "Citerna", href: "citerna"} 
});
