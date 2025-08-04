import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Padova",
  canonical: links.servizi["noleggio-bagni-chimici"]["padova"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Padova", 
  locationNames: {label: "Padova", href: "padova"} 
});
