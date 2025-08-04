import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Norcia",
  canonical: links.servizi["noleggio-bagni-chimici"]["norcia"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Norcia", 
  locationNames: {label: "Norcia", href: "norcia"} 
});
