import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Bologna",
  canonical: links.servizi["noleggio-bagni-chimici"]["bologna"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Bologna", 
  locationNames: {label: "Bologna", href: "bologna"} 
});
