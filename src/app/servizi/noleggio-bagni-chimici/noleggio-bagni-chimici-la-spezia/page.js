import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici La Spezia",
  canonical: links.servizi["noleggio-bagni-chimici"]["la-spezia"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici La Spezia", 
  locationNames: {label: "La Spezia", href: "la-spezia"} 
});
