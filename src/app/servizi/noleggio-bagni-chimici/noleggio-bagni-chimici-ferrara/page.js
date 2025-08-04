import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Ferrara",
  canonical: links.servizi["noleggio-bagni-chimici"]["ferrara"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Ferrara", 
  locationNames: {label: "Ferrara", href: "ferrara"} 
});
