import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Belluno",
  canonical: links.servizi["noleggio-bagni-chimici"]["belluno"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Belluno", 
  locationNames: {label: "Belluno", href: "belluno"} 
});
