import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Castelfiorentino",
  canonical: links.servizi["noleggio-bagni-chimici"]["castelfiorentino"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Castelfiorentino", 
  locationNames: {label: "Castelfiorentino", href: "castelfiorentino"} 
});
