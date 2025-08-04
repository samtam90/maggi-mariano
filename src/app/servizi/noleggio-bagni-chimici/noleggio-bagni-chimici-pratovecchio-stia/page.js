import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Pratovecchio Stia",
  canonical: links.servizi["noleggio-bagni-chimici"]["pratovecchio-stia"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Pratovecchio Stia", 
  locationNames: {label: "Pratovecchio Stia", href: "pratovecchio-stia"} 
});
