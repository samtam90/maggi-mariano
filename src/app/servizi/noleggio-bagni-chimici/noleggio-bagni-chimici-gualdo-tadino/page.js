import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Gualdo Tadino",
  canonical: links.servizi["noleggio-bagni-chimici"]["gualdo-tadino"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Gualdo Tadino", 
  locationNames: {label: "Gualdo Tadino", href: "gualdo-tadino"} 
});
