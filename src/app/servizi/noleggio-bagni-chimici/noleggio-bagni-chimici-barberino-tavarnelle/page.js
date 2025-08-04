import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Barberino Tavarnelle",
  canonical: links.servizi["noleggio-bagni-chimici"]["barberino-tavarnelle"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Barberino Tavarnelle", 
  locationNames: {label: "Barberino Tavarnelle", href: "barberino-tavarnelle"} 
});
