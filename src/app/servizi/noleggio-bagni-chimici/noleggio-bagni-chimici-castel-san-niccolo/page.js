import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Castel San Niccolò",
  canonical: links.servizi["noleggio-bagni-chimici"]["castel-san-niccolo"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Castel San Niccolò", 
  locationNames: {label: "Castel San Niccolò", href: "castel-san-niccolo"} 
});
