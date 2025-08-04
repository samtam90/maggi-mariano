import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Marsciano",
  canonical: links.servizi["noleggio-bagni-chimici"]["marsciano"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Marsciano", 
  locationNames: {label: "Marsciano", href: "marsciano"} 
});
