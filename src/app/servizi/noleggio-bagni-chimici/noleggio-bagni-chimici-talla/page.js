import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Talla",
  canonical: links.servizi["noleggio-bagni-chimici"]["talla"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Talla", 
  locationNames: {label: "Talla", href: "talla"} 
});
