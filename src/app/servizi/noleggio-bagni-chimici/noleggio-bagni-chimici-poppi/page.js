import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Poppi",
  canonical: links.servizi["noleggio-bagni-chimici"]["poppi"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Poppi", 
  locationNames: {label: "Poppi", href: "poppi"} 
});
