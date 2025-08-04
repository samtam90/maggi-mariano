import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Vaglia",
  canonical: links.servizi["noleggio-bagni-chimici"]["vaglia"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Vaglia", 
  locationNames: {label: "Vaglia", href: "vaglia"} 
});
