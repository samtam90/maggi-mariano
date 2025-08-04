import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Borgo San Lorenzo",
  canonical: links.servizi["noleggio-bagni-chimici"]["borgo-san-lorenzo"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Borgo San Lorenzo", 
  locationNames: {label: "Borgo San Lorenzo", href: "borgo-san-lorenzo"} 
});
