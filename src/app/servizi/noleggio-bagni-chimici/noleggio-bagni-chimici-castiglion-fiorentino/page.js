import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Castiglion Fiorentino",
  canonical: links.servizi["noleggio-bagni-chimici"]["castiglion-fiorentino"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Castiglion Fiorentino", 
  locationNames: {label: "Castiglion Fiorentino", href: "castiglion-fiorentino"} 
});
