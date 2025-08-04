import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Capolona",
  canonical: links.servizi["noleggio-bagni-chimici"]["capolona"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Capolona", 
  locationNames: {label: "Capolona", href: "capolona"} 
});
