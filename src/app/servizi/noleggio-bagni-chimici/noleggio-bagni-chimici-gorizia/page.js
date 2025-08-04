import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Gorizia",
  canonical: links.servizi["noleggio-bagni-chimici"]["gorizia"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Gorizia", 
  locationNames: {label: "Gorizia", href: "gorizia"} 
});
