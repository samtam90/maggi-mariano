import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Castiglion Fibocchi",
  canonical: links.servizi["noleggio-bagni-chimici"]["castiglion-fibocchi"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Castiglion Fibocchi", 
  locationNames: {label: "Castiglion Fibocchi", href: "castiglion-fibocchi"} 
});
