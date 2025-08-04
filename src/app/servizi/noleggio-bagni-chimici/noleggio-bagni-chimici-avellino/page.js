import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Avellino",
  canonical: links.servizi["noleggio-bagni-chimici"]["avellino"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Avellino", 
  locationNames: {label: "Avellino", href: "avellino"} 
});
