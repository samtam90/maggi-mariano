import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Camucia",
  canonical: links.servizi["noleggio-bagni-chimici"]["camucia"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Camucia", 
  locationNames: {label: "Camucia", href: "camucia"} 
});
