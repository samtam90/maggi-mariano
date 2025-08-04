import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Poggiodomo",
  canonical: links.servizi["noleggio-bagni-chimici"]["poggiodomo"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Poggiodomo", 
  locationNames: {label: "Poggiodomo", href: "poggiodomo"} 
});
