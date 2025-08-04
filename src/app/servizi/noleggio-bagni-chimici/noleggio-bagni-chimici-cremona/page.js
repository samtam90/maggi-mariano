import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Cremona",
  canonical: links.servizi["noleggio-bagni-chimici"]["cremona"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Cremona", 
  locationNames: {label: "Cremona", href: "cremona"} 
});
