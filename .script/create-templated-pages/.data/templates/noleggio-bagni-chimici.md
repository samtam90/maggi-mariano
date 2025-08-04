import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici [name]",
  canonical: links.servizi["noleggio-bagni-chimici"]["[path]"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici [name]", 
  locationNames: {label: "[name]", href: "[path]"} 
});
