import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Montevarchi",
  canonical: links.servizi["noleggio-bagni-chimici"]["montevarchi"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Montevarchi", 
  locationNames: {label: "Montevarchi", href: "montevarchi"} 
});
