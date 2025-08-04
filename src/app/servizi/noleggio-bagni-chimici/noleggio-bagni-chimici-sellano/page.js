import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Sellano",
  canonical: links.servizi["noleggio-bagni-chimici"]["sellano"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Sellano", 
  locationNames: {label: "Sellano", href: "sellano"} 
});
