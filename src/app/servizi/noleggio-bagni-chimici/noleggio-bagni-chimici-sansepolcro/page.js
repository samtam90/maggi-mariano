import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Sansepolcro",
  canonical: links.servizi["noleggio-bagni-chimici"]["sansepolcro"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Sansepolcro", 
  locationNames: {label: "Sansepolcro", href: "sansepolcro"} 
});
