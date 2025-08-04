import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Sassari",
  canonical: links.servizi["noleggio-bagni-chimici"]["sassari"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Sassari", 
  locationNames: {label: "Sassari", href: "sassari"} 
});
