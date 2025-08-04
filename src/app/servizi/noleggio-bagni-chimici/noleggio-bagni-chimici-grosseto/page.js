import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Grosseto",
  canonical: links.servizi["noleggio-bagni-chimici"]["grosseto"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Grosseto", 
  locationNames: {label: "Grosseto", href: "grosseto"} 
});
