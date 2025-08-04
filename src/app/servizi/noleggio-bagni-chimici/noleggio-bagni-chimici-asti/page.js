import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Asti",
  canonical: links.servizi["noleggio-bagni-chimici"]["asti"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Asti", 
  locationNames: {label: "Asti", href: "asti"} 
});
