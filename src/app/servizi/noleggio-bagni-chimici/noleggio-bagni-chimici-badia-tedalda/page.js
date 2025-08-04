import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Badia Tedalda",
  canonical: links.servizi["noleggio-bagni-chimici"]["badia-tedalda"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Badia Tedalda", 
  locationNames: {label: "Badia Tedalda", href: "badia-tedalda"} 
});
