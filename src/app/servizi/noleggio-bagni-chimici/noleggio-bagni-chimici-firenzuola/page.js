import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Firenzuola",
  canonical: links.servizi["noleggio-bagni-chimici"]["firenzuola"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Firenzuola", 
  locationNames: {label: "Firenzuola", href: "firenzuola"} 
});
