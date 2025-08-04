import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Terni",
  canonical: links.servizi["noleggio-bagni-chimici"]["terni"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Terni", 
  locationNames: {label: "Terni", href: "terni"} 
});
