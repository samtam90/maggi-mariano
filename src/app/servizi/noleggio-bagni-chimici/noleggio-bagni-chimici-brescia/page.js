import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Brescia",
  canonical: links.servizi["noleggio-bagni-chimici"]["brescia"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Brescia", 
  locationNames: {label: "Brescia", href: "brescia"} 
});
