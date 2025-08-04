import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Castelfranco Piandiscò",
  canonical: links.servizi["noleggio-bagni-chimici"]["castelfranco-piandisco"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Castelfranco Piandiscò", 
  locationNames: {label: "Castelfranco Piandiscò", href: "castelfranco-piandisco"} 
});
