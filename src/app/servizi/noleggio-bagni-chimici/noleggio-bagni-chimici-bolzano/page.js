import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Bolzano",
  canonical: links.servizi["noleggio-bagni-chimici"]["bolzano"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Bolzano", 
  locationNames: {label: "Bolzano", href: "bolzano"} 
});
