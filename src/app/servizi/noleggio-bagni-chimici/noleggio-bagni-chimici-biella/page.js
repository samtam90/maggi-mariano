import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Biella",
  canonical: links.servizi["noleggio-bagni-chimici"]["biella"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Biella", 
  locationNames: {label: "Biella", href: "biella"} 
});
