import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Castel Focognano",
  canonical: links.servizi["noleggio-bagni-chimici"]["castel-focognano"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Castel Focognano", 
  locationNames: {label: "Castel Focognano", href: "castel-focognano"} 
});
