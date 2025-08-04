import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Potenza",
  canonical: links.servizi["noleggio-bagni-chimici"]["potenza"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Potenza", 
  locationNames: {label: "Potenza", href: "potenza"} 
});
