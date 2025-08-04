import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Cortona",
  canonical: links.servizi["noleggio-bagni-chimici"]["cortona"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Cortona", 
  locationNames: {label: "Cortona", href: "cortona"} 
});
