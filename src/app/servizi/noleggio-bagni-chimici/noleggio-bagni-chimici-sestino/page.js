import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Sestino",
  canonical: links.servizi["noleggio-bagni-chimici"]["sestino"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Sestino", 
  locationNames: {label: "Sestino", href: "sestino"} 
});
