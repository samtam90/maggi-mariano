import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici San Giustino",
  canonical: links.servizi["noleggio-bagni-chimici"]["san-giustino"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici San Giustino", 
  locationNames: {label: "San Giustino", href: "san-giustino"} 
});
