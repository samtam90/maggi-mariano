import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Scheggino",
  canonical: links.servizi["noleggio-bagni-chimici"]["scheggino"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Scheggino", 
  locationNames: {label: "Scheggino", href: "scheggino"} 
});
