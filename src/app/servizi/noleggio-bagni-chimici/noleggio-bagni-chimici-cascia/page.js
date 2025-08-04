import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Cascia",
  canonical: links.servizi["noleggio-bagni-chimici"]["cascia"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Cascia", 
  locationNames: {label: "Cascia", href: "cascia"} 
});
