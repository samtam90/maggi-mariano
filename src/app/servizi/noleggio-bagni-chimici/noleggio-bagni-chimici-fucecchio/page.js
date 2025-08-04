import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Fucecchio",
  canonical: links.servizi["noleggio-bagni-chimici"]["fucecchio"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Fucecchio", 
  locationNames: {label: "Fucecchio", href: "fucecchio"} 
});
