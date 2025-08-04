import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici San Godenzo",
  canonical: links.servizi["noleggio-bagni-chimici"]["san-godenzo"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici San Godenzo", 
  locationNames: {label: "San Godenzo", href: "san-godenzo"} 
});
