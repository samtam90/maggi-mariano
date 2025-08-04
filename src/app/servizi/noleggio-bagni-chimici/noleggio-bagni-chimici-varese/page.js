import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Varese",
  canonical: links.servizi["noleggio-bagni-chimici"]["varese"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Varese", 
  locationNames: {label: "Varese", href: "varese"} 
});
