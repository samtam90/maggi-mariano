import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Pontassieve",
  canonical: links.servizi["noleggio-bagni-chimici"]["pontassieve"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Pontassieve", 
  locationNames: {label: "Pontassieve", href: "pontassieve"} 
});
