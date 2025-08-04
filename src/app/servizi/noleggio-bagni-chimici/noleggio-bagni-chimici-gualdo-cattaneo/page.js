import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Gualdo Cattaneo",
  canonical: links.servizi["noleggio-bagni-chimici"]["gualdo-cattaneo"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Gualdo Cattaneo", 
  locationNames: {label: "Gualdo Cattaneo", href: "gualdo-cattaneo"} 
});
