import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Signa",
  canonical: links.servizi["noleggio-bagni-chimici"]["signa"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Signa", 
  locationNames: {label: "Signa", href: "signa"} 
});
