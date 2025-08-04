import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Torgiano",
  canonical: links.servizi["noleggio-bagni-chimici"]["torgiano"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Torgiano", 
  locationNames: {label: "Torgiano", href: "torgiano"} 
});
