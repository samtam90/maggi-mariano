import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Enna",
  canonical: links.servizi["noleggio-bagni-chimici"]["enna"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Enna", 
  locationNames: {label: "Enna", href: "enna"} 
});
