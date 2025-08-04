import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Milano",
  canonical: links.servizi["noleggio-bagni-chimici"]["milano"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Milano", 
  locationNames: {label: "Milano", href: "milano"} 
});
