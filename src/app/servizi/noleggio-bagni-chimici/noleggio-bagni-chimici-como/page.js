import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Como",
  canonical: links.servizi["noleggio-bagni-chimici"]["como"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Como", 
  locationNames: {label: "Como", href: "como"} 
});
