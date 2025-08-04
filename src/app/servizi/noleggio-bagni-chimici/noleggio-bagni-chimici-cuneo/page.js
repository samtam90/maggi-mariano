import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Cuneo",
  canonical: links.servizi["noleggio-bagni-chimici"]["cuneo"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Cuneo", 
  locationNames: {label: "Cuneo", href: "cuneo"} 
});
