import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Bergamo",
  canonical: links.servizi["noleggio-bagni-chimici"]["bergamo"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Bergamo", 
  locationNames: {label: "Bergamo", href: "bergamo"} 
});
