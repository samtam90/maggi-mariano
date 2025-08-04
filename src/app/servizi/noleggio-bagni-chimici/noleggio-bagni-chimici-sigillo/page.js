import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Sigillo",
  canonical: links.servizi["noleggio-bagni-chimici"]["sigillo"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Sigillo", 
  locationNames: {label: "Sigillo", href: "sigillo"} 
});
