import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Corciano",
  canonical: links.servizi["noleggio-bagni-chimici"]["corciano"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Corciano", 
  locationNames: {label: "Corciano", href: "corciano"} 
});
